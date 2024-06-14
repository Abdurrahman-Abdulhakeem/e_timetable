import React from 'react';
import PropTypes from 'prop-types';

const ForwardIcon = ({ color, width, height, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 16 16"
        fill='none'
        className={className}
    >
        <path d="M4.93313 4.21344L10.5931 2.32677C13.1331 1.4801 14.5131 2.86677 13.6731 5.40677L11.7865 11.0668C10.5198 14.8734 8.43979 14.8734 7.17312 11.0668L6.61312 9.38677L4.93313 8.82677C1.12646 7.5601 1.12646 5.48677 4.93313 4.21344Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.74023 9.09988L9.1269 6.70654" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);



ForwardIcon.propTypes = {
    color: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ForwardIcon.defaultProps = {
    color: "#586283",
    width: "16",
    height: "16",
};

export default ForwardIcon;
