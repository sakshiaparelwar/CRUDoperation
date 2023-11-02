import React from "react";
import Layout from "../components/Layout";
import "../components/style.css";

function Home() {
  return (
    <Layout>
      <div id="carouselExampleSlidesOnly">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block img-fluid image"
              src="https://images.pexels.com/photos/575424/pexels-photo-575424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="First slide"
            />
            <div class="carousel-caption" id="captext">
              <h5>
                Welcome to<i> MyCompany</i>
              </h5>
              <p>To Know more about us please Signin.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
