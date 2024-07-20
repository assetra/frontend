import React, { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import SwingSDK, {
  TransferStepResults,
  TransferStepResult,
  TransferRoute,
  TransferParams,
  Chain,
  Token,
  ChainSlug,
  TokenSymbol,
} from "@swing.xyz/sdk";
import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { LiaExchangeAltSolid } from "react-icons/lia";
import { StatusSheet } from "@/components/ui/StatusSheet";
import { Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const Swap: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [routes, setRoutes] = useState<TransferRoute[] | null>(null);
  const [status, setStatus] = useState<TransferStepResult | null>(null);
  const [results, setResults] = useState<TransferStepResults | null>(null);
  const [resultLogs, setResultLogs] = useState<
    { time: string; log?: string; logType?: string }[]
  >([]);
  const [transferParams, setTransferParams] = useState<TransferParams>({
    amount: "0",
    fromChain: "ethereum",
    fromToken: "ETH",
    fromUserAddress: "",
    toChain: "polygon",
    toToken: "MATIC",
    toUserAddress: "",
  });
  const [transferRoute, setTransferRoute] = useState<TransferRoute | null>(
    null
  );
  const [availableChains, setAvailableChains] = useState<Chain[]>([]);
  const [fromTokens, setFromTokens] = useState<Token[]>([]);
  const [toTokens, setToTokens] = useState<Token[]>([]);
  const [balance, setBalance] = useState<string>("0");

  const { connector, provider, account } = useWeb3React();
  const { toast } = useToast();
  const [swingSDK, setSwingSDK] = useState<SwingSDK | null>(null);
  const isConnected = swingSDK?.wallet.isConnected();

  useEffect(() => {
    const swing = new SwingSDK({
      projectId: "gtx",
      environment: "production",
      debug: true,
    });

    setIsLoading(true);

    swing
      .init()
      .then(() => {
        setIsLoading(false);
        setSwingSDK(swing);
        setAvailableChains(swing.chains);
        updateFromTokens(swing, transferParams.fromChain);
        updateToTokens(swing, transferParams.toChain);
      })
      .catch((error) => {
        setIsLoading(false);
        showError(error.message);
        setSwingSDK(swing);
      });
  }, []);

  useEffect(() => {
    async function syncProviderWithSwingSDK() {
      if (swingSDK && provider && account) {
        const walletAddress = await swingSDK.wallet.connect(
          provider.getSigner(),
          transferParams.fromChain as ChainSlug
        );

        setTransferParams((prev) => ({
          ...prev,
          fromUserAddress: walletAddress,
          toUserAddress: walletAddress,
        }));

        updateBalance();
      }
    }

    syncProviderWithSwingSDK();
  }, [
    provider,
    swingSDK,
    account,
    transferParams.fromChain,
    transferParams.fromToken,
  ]);

  const updateFromTokens = (sdk: SwingSDK, chainSlug: ChainSlug) => {
    const tokens = sdk.getTokensForChain(chainSlug);
    setFromTokens(tokens);
  };

  const updateToTokens = (sdk: SwingSDK, chainSlug: ChainSlug) => {
    const tokens = sdk.getTokensForChain(chainSlug);
    setToTokens(tokens);
  };

  const updateBalance = async () => {
    if (swingSDK && account) {
      const balance = await swingSDK.wallet.getBalance(
        transferParams.fromChain as ChainSlug,
        transferParams.fromToken as TokenSymbol,
        account
      );
      setBalance(balance);
    }
  };

  const showError = (description: string) => {
    toast({
      title: "An Error Occurred",
      variant: "destructive",
      description,
    });
  };

  const connectWallet = async () => {
    if (!swingSDK) return;

    try {
      await connector.activate();
    } catch (error) {
      console.error("Connect Wallet Error:", error);
      showError((error as Error).message);
    }
  };

  const switchChain = async (chain: Chain) => {
    if (!swingSDK) return;

    try {
      await connector.activate(chain.id);
    } catch (error) {
      console.error("Switch Chain Error:", error);
      showError((error as Error).message);
    }
  };

  const getQuote = async () => {
    if (!swingSDK) return;

    setIsLoading(true);

    try {
      const quotes = await swingSDK.getQuote(transferParams);

      if (!quotes.routes.length) {
        showError("No routes available. Try a different token pair.");
        setIsLoading(false);
        return;
      }

      setRoutes(quotes.routes);
      // Automatically select the best route (first one)
      setTransferRoute(quotes.routes[0]);
    } catch (error) {
      console.error("Quote Error:", error);
      showError((error as Error).message);
    }

    setIsLoading(false);
  };

  const startTransfer = async () => {
    if (!swingSDK || !transferRoute) {
      showError("No route selected.");
      return;
    }

    if (parseFloat(transferParams.amount) > parseFloat(balance)) {
      showError("Insufficient balance.");
      return;
    }

    const transferListener = swingSDK.on(
      "TRANSFER",
      async (transferStepStatus, transferResults) => {
        setResultLogs((prevItems) => [
          ...prevItems,
          {
            time: new Date().toISOString(),
            log: `Transaction Status -> ${transferStepStatus.status}`,
            logType: "MESSAGE",
          },
          {
            time: new Date().toISOString(),
            log: `Transfer Step -> ${transferStepStatus.step}`,
            logType: "MESSAGE",
          },
        ]);

        setStatus(transferStepStatus);
        setResults(transferResults);

        console.log("TRANSFER:", transferStepStatus, transferResults);

        switch (transferStepStatus.status) {
          case "ACTION_REQUIRED":
            setResultLogs((prevItems) => [
              ...prevItems,
              {
                time: new Date().toISOString(),
                log: `ACTION REQUIRED: Prompting MetaMask`,
                logType: "ACTION_REQUIRED",
              },
            ]);
            break;
          case "CHAIN_SWITCH_REQUIRED":
            setResultLogs((prevItems) => [
              ...prevItems,
              {
                time: new Date().toISOString(),
                log: `CHAIN SWITCH REQUIRED: Prompting MetaMask`,
                logType: "CHAIN_SWITCH",
              },
            ]);
            await switchChain(transferStepStatus.chain);
            break;

          case "WALLET_CONNECTION_REQUIRED":
            await connectWallet();
            break;
        }
      }
    );

    setIsLoading(true);

    try {
      await swingSDK.transfer(transferRoute, transferParams);
    } catch (error) {
      console.error("Transfer Error:", error);
      setResultLogs((prevItems) => [
        ...prevItems,
        {
          time: new Date().toISOString(),
          log: `Error -> ${(error as Error).message}`,
          logType: "ERROR",
        },
      ]);
    }

    transferListener();
    setIsLoading(false);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Swap Tokens
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="from-token">From</Label>
            <Select
              value={transferParams.fromChain}
              onValueChange={(value) => {
                setTransferParams((prev) => ({
                  ...prev,
                  fromChain: value as ChainSlug,
                }));
                updateFromTokens(swingSDK!, value as ChainSlug);
              }}
            >
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="From Chain" />
              </SelectTrigger>
              <SelectContent>
                {availableChains.map((chain) => (
                  <SelectItem key={chain.slug} value={chain.slug}>
                    {chain.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="from-symbol">Symbol</Label>
            <Select
              value={transferParams.fromToken}
              onValueChange={(value) => {
                setTransferParams((prev) => ({
                  ...prev,
                  fromToken: value as TokenSymbol,
                }));
                updateBalance();
              }}
            >
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="From Token" />
              </SelectTrigger>
              <SelectContent>
                {fromTokens.map((token) => (
                  <SelectItem key={token.symbol} value={token.symbol}>
                    {token.symbol}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex rotate-90 justify-center">
          <LiaExchangeAltSolid className="text-2xl text-gray-500" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="to-token">To</Label>
            <Select
              value={transferParams.toChain}
              onValueChange={(value) => {
                setTransferParams((prev) => ({
                  ...prev,
                  toChain: value as ChainSlug,
                }));
                updateToTokens(swingSDK!, value as ChainSlug);
              }}
            >
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="To Chain" />
              </SelectTrigger>
              <SelectContent>
                {availableChains.map((chain) => (
                  <SelectItem key={chain.slug} value={chain.slug}>
                    {chain.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="to-symbol">Symbol</Label>
            <Select
              value={transferParams.toToken}
              onValueChange={(value) =>
                setTransferParams((prev) => ({
                  ...prev,
                  toToken: value as TokenSymbol,
                }))
              }
            >
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="To Token" />
              </SelectTrigger>
              <SelectContent>
                {toTokens.map((token) => (
                  <SelectItem key={token.symbol} value={token.symbol}>
                    {token.symbol}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="amount" className="text-sm font-medium">
            Amount
          </label>
          <Input
            id="amount"
            type="number"
            placeholder="0"
            value={transferParams.amount}
            onChange={(e) => {
              setTransferRoute(null);
              setTransferParams((prev) => ({
                ...prev,
                amount: e.target.value,
              }));
            }}
          />
          <p className="text-xs text-gray-500">
            Balance: {balance} {transferParams.fromToken}
          </p>
        </div>

        {transferRoute && (
          <div className="text-sm">
            {/* <p>Best Route: {transferRoute.quote.integration}</p> */}
            <p>
              Expected Output: {transferRoute.quote.amountUSD}{" "}
              {transferParams.toToken}
            </p>
          </div>
        )}

        {isConnected ? (
          <Button
            className="w-full"
            disabled={isLoading}
            onClick={() => (transferRoute ? startTransfer() : getQuote())}
          >
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : transferRoute ? (
              "Swap"
            ) : (
              "Get Quote"
            )}
          </Button>
        ) : (
          <Button
            className="w-full"
            disabled={isLoading}
            onClick={connectWallet}
          >
            Connect Wallet
          </Button>
        )}

        <StatusSheet
          isOpen={!!status}
          logs={resultLogs}
          onCancel={async () => {
            await swingSDK?.cancelTransfer(results?.transferId!);
            setStatus(null);
          }}
        />
      </CardContent>
    </Card>
  );
};

export default Swap;
