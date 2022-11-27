import * as React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const Loader = ({ loading }) => {
    return (
        loading && (
            <div className='loader'>
                <ClipLoader
                    color="black"
                    loading={loading}
                    size={50}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
        )
    );
};

export default Loader;
