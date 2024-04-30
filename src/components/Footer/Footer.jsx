const Footer = () => {
    return (
        <div className="bg-slate-950 mt-24">
            <footer className="footer p-10 text-base-content mx-auto max-w-6xl">
                <aside>
                    
                    <p className="text-white">Go Travels<br />A largest tourism company</p>
                </aside>
                <nav className="text-white">
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Traveling</a>
                    <a className="link link-hover">Tickets</a>
                    <a className="link link-hover">Booking</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className="text-white">
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className="text-white">
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;