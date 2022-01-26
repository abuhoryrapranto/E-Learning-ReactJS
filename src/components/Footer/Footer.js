function Footer() {
    return (
        <div>
            <footer className="bg-slate-800 fixed inset-x-0 bottom-0 p-1 text-white text-xs text-center">
                &copy; Copyright {(new Date().getFullYear())} - Md Abu Horyra Pranto
            </footer>
        </div>
    );
}

export default Footer;