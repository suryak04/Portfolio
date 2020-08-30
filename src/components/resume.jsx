import React from 'react';
import { Document, Page } from 'react-pdf';
import './resume.css';

import samplePDF from '../details/CV_11705094.pdf';

export default function Test() {
    return (
        <React.Fragment>
        <a className="" href="https://drive.google.com/file/d/1VjUZt9LX55BDJonCf6EaH5LAPZ2iLVsm/view" target="_blank">
            <button className="m-3 btn btn-primary"> Download </button>
        </a>

        <Document className="resume" file={samplePDF}
            options={{ workerSrc: "/pdf.worker.js" }}
        >
            <Page  pageNumber={1} />
        </Document>
        </React.Fragment>
    );
}