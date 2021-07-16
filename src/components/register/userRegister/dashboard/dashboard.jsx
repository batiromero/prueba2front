import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../../../contexts/AuthContext";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to Log Out");
    }
  }

  return (
    <>
      <Link to="/home" className="btn btn-primary">
        VOLVER
      </Link>

      {currentUser ? (
        <div class="container-fluid">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xs-offset-0 col-sm-offset-0 col-md-offset-3 col-lg-offset-3 toppad">
              <br />
              <br />
              <div class="panel panel-info">
                <div class="panel-heading">
                  <h3 class="text-center">Nombre y apellido</h3>
                </div>
                <div class="panel-body">
                  <div class="row">
                    <div class="col-md-3 col-lg-3 " align="center">
                      {" "}
                      <img
                        alt="User Pic"
                        src="http://babyinfoforyou.com/wp-content/uploads/2014/10/avatar-300x300.png"
                        class="img-circle img-responsive"
                      />{" "}
                    </div>
                    <div class=" col-md-9 col-lg-9 ">
                      <table class="table table-user-information">
                        <tbody>
                          <tr>
                            <td>Department:</td>
                            <td>Programming</td>
                          </tr>
                          <tr>
                            <td>Hire date:</td>
                            <td>06/23/2013</td>
                          </tr>
                          <tr>
                            <td>Date of Birth</td>
                            <td>01/24/1988</td>
                          </tr>
                         <tr>
                            <td>Dirección</td>
                            <td>Kathmandu,Nepal</td>
                          </tr>
                          <tr>
                            <td>Email:</td>
                            <td>
                              <a href="mailto:info@support.com">
                                <strong>{currentUser.email}</strong>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>Teléfono</td>
                            <td>123-4567-890(Landline)</td>
                          </tr>
                        </tbody>
                      </table>
                      <div class="mb-5">
                        <a href="#" class="btn btn-primary">
                          Mis pedidos anteriores
                        </a>
                        <a href="#" class="btn btn-primary ml-5">
                          Mis favoritos
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="panel-footer">
                  <a href="edit.html">Modificar datos</a>
                  <br />
                  <button className='btn btn-warning' onClick={handleLogout}>Cerrar Sesion</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='container'>Volvé a loguearte</div>
      )}
    </>
  );
}
