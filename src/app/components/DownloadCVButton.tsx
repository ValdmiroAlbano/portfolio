import { FiDownload } from 'react-icons/fi';

const DownloadCVButton = () => {
  return (
    <a
      href="CV/CV.pdf"
      download="Valdmiro-Quiquel-CV.pdf"
      className="bg-black p-2 text-white text-sm rounded-md"
    >
      Baixar CV
    </a>
  );
};

export default DownloadCVButton;
