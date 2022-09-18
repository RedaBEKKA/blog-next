import Link from "next/link";
export default function Home() {
  return (
    <div className="container px-4 pt-5">
      <h1>Bienvenue sur BigNova Blog</h1>
      <span>Le blog communitaire des bignova coders de developpement web</span>
      <div className="row mt-15">
        <div className="col-12 col-sm-6" style={{ minHeight: "200px" }}>
          <div className="card w-100 h-100">
            <div className="card-body">
              <h5 className="card-title">Lisez les articles</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Maximisez votre culture web
              </h6>
              <p className="card-text">
                Chaque auteur de vous apporter le plus de valeurs possible par
                articles
              </p>
              <Link href="/blog">
                <a>Visitez le blog</a>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6" style={{ minHeight: "200px" }}>
          <div className="card w-100 h-100">
            <div className="card-body">
              <h5 className="card-title">
                Faites un tour vers la liste de membre
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Rencontrez des devs
              </h6>
              <p className="card-text">
                Ajoutez ,invitez et discutez avec les différents membres.
              </p>
              <Link href="/utilisateurs">
                <a>Découvrez la liste des membres</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
