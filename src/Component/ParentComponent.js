import React from 'react';
import Listorder from './Listorder';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Button } from 'antd'; // Example: using Ant Design Button

function ParentComponent({ selectedOrderId }) {
    // const selectedOrderId = selectedOrderId ;

    const generatePDF = () => {
        const input = document.getElementById('pdf-content');

        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'pt', 'a5');
                const imgWidth = 210;
                const imgHeight = (canvas.height * imgWidth) / canvas.width;

                pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
                pdf.save(`HoaDon_${selectedOrderId}.pdf`);
            })
            .catch((error) => {
                console.error('Error generating PDF:', error);
                alert('Error generating PDF. Please check the console for details.');
            });
    };

    return (
        <div>      
            <Button onClick={generatePDF}
            icon={ <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
              viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
              class="size-6 text-sky-500">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
            </svg>}
            type='link' className='flex flex-row justify-center items-center'>
             
            In Hóa Đơn
            



            </Button>

        </div>
    );
}

export default ParentComponent;
