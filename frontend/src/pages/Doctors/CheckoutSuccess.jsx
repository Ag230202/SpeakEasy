import {Link} from 'react-router-dom';

const CheckoutSuccess = () =>{
    return (
        <div className="bg-gray-100 h-screen">
            <div className="bg-white p-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-square" viewBox="0 0 16 16">
  <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/>
  <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/>
</svg>
                <div className="text-center">
                    <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
                        Payment Done!
                    </h3>
                    <p className="text-gray-600 my-2">
                        Thank You for Completing your secure online payment
                    </p>
                    <p>Have a great day !</p>
                    <div className="py-10 text-center">
                        <Link to="/home" className='px-12 bg-buttonBgColor text-white font-semibold py-3'>
                        Go to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CheckoutSuccess;