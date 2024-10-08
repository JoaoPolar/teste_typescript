
const Button = () => {
  return <button>Botão</button>
};

const Footer = () => {
  return <footer className="text-center bg-body-tertiary">
    <div className="container pt-4">
      <section className="mb-4">
        <a
          data-mdb-ripple-init
          className="btn btn-link btn-floating btn-lg text-body m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
        >
        <i className="fab fa-facebook-f"></i>
        </a>

        <a
          data-mdb-ripple-init
          className="btn btn-link btn-floating btn-lg text-body m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
        ><i className="fab fa-twitter"></i></a>

        <a
          data-mdb-ripple-init
          className="btn btn-link btn-floating btn-lg text-body m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
        ><i className="fab fa-google"></i></a>

        <a
          data-mdb-ripple-init
          className="btn btn-link btn-floating btn-lg text-body m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
        ><i className="fab fa-instagram"></i></a>

        <a
          data-mdb-ripple-init
          className="btn btn-link btn-floating btn-lg text-body m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
        ><i className="fab fa-linkedin"></i></a>
        <a
          data-mdb-ripple-init
          className="btn btn-link btn-floating btn-lg text-body m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
        ><i className="fab fa-github"></i></a>
      </section>
    </div>



    <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
      © 2020 Copyright:
      <a className="text-body" href="https://mdbootstrap.com/">MDBootstrap.com</a>
    </div>

  </footer>
};

const NavBar = () => {
  return <nav className="navbar bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <img
          src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
          width="30"
          height="30"
          className="d-inline-block align-text-top"
        />
        Teste de componetes
      </a>
    </div>

  </nav>
};

export const Dashboard = () => {
  return (
    <div>
      <NavBar />
      <p>Dashborad</p>
      <Button />
      <Footer />
    </div>
  );
}