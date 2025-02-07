export default function DownloadPdfButton() {
  const handleDownload = () => {
    const pdfUrl = "/CV_Renaldi_Saputra.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "CV_Renaldi-Saputra.pdf";
    link.click();
  };

  return (
    <button
      onClick={handleDownload}
      className="group text-xs font-medium px-3 py-2 bg-yellow-300 rounded-full cursor-pointer text-slate-800 hover:bg-yellow-400 hover:text-white"
    >
      Download PDF
      <i className="group-hover:bg-black ml-1 fas fa-download bg-white px-1 py-1 rounded-full "></i>
    </button>
  );
}
