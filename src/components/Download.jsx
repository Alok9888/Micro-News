import { useState } from "react";
import { fetchArticles } from "../services/guardianApi";
import jsPDF from "jspdf";
import { FiDownload } from "react-icons/fi";

const Download = () => {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      const articles = await fetchArticles({
        pageSize: 10,
        "order-by": "newest",
        "show-fields": "all",
      });

      const doc = new jsPDF();

      // Add title
      doc.setFont("helvetica", "bold");
      doc.setFontSize(24);
      doc.setTextColor(5, 60, 143); // Primary color
      doc.text("The Guardian News Digest", 20, 20);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(12);
      doc.setTextColor(51, 51, 51);
      doc.text(new Date().toLocaleDateString(), 20, 30);

      let yPosition = 40;
      const pageWidth = doc.internal.pageSize.width;
      const margin = 20;
      const textWidth = pageWidth - 2 * margin;

      articles.forEach((article, index) => {
        if (yPosition > 250) {
          doc.addPage();
          yPosition = 20;
        }

        // Article index
        doc.setFont("helvetica", "bold");
        doc.setFontSize(14);
        doc.setTextColor(5, 60, 143);
        doc.text(`${index + 1}.`, 20, yPosition);
        yPosition += 10;

        // Article title
        doc.setFont("helvetica", "bold");
        doc.setFontSize(14);
        doc.setTextColor(51, 51, 51);
        const title = doc.splitTextToSize(article.title, textWidth);
        doc.text(title, 20, yPosition);
        yPosition += title.length * 7;

        // Article metadata
        doc.setFont("helvetica", "italic");
        doc.setFontSize(10);
        doc.setTextColor(102, 102, 102);
        const metadata = `${new Date(article.date).toLocaleDateString()} | ${article.author || "The Guardian"}`;
        doc.text(metadata, 20, yPosition);
        yPosition += 7;

        // Article description
        if (article.description) {
          doc.setFont("helvetica", "normal");
          doc.setFontSize(12);
          doc.setTextColor(51, 51, 51);
          const description = doc.splitTextToSize(article.description, textWidth);
          doc.text(description, 20, yPosition);
          yPosition += description.length * 7;
        }

        // Add some spacing between articles
        yPosition += 10;
      });

      // Add footer
      doc.setFont("helvetica", "italic");
      doc.setFontSize(10);
      doc.setTextColor(128, 128, 128);
      const footerText = "Content provided by The Guardian News API";
      doc.text(footerText, pageWidth / 2, doc.internal.pageSize.height - 10, { align: "center" });

      // Save the PDF
      doc.save("guardian-news-digest.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="downloadPdf block" id="download">
      <div className="container">
        <div className="dpRow">
          {/* <div className="dpImg">
            <img src="/img/pdf.jpg" alt="Download PDF" />
          </div> */}
          <div className="dpDetails">
            <h3>Download News Digest PDF</h3>
            <button className="btn btn-light" onClick={handleDownload} disabled={loading}>
              <FiDownload />
              {loading ? "Generating PDF..." : "Download PDF"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
