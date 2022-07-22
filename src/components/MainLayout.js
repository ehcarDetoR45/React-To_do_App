import Navbar from "../Navbar";
import Pages from "../components/Pages";

export default function MainLayout() {
  return (
    <div>
      <nav className="nav navbar navbar-expand-lg navbar-light bg-white py-1 shadow-sm sticky-top">
        <div className="container">
          <Navbar />
        </div>
      </nav>

      <main className="container-fluid text-center border">
        <Pages />
      </main>

      <footer >do the layout and make footerr component</footer>
    </div>
  );
}
