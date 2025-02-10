import React, { useState } from 'react';

interface SignImageProps {
    src: string; 
    alt: string;
}


const SignImage = ( signData: SignImageProps) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const handleLoad = () => {
        setLoading(false);
    }

    const handleError = () => {
        setLoading(false);
        setError(true);
    }

    const {src, alt} = signData; 

    return (
        <img 
            src={error ? "https:/placehold.co/600x400?text=Image/n+not+Found" : loading ? "https://placehold.co/600x400?text=loading..." : src}
            alt={error ? 'Error' : alt}
            className="SignImage"
            onLoad={handleLoad}
            onError={handleError}
        />
    );
}

export default SignImage; 