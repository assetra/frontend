"use client";

export interface Pdf {
  id: number;
  title: string;
  pdf_file_url: string;
  uploaded_at: string;
}

type ArticleProps = {
  pdf: Pdf;
};

const Pdf: React.FC<ArticleProps> = ({ pdf }) => {
  if (!pdf) {
    return <div>No pdf found.</div>;
  }

  return (
    <div className="main-container">
      <div className="pdf-wrapper">
      <iframe title={pdf.title} src={pdf.pdf_file_url}></iframe>
      </div>
    </div>
  );
};

export default Pdf;
