import React from "react"
import { Link } from "react-router-dom"

export default ({ }) => (
	<div className="container mt-5">
		<div className="row mb-5">

			<div className="col-md-4">
				<div className="card">
					<img src="https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">My Tasks</h5>
						<p className="card-text">See the activities that you have going on, all in one section.</p>
						<Link to='/myTasks'>
							<button className="btn btn-info btn-block mb-2" style={{ backgroundColor: "#adb5bd", borderColor: "#adb5bd" }}>Access</button>
						</Link>
					</div>
				</div>
			</div>

			<div className="col-md-4">
				<div className="card">
					<img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Recruits</h5>
						<p className="card-text">Get to know your Recruits, and add new ones.</p>
						<Link to='/newRecruit'>
							<button className="btn btn-info btn-block mb-2" style={{ backgroundColor: "#adb5bd", borderColor: "#adb5bd" }}>Access</button>
						</Link>
					</div>
				</div>
			</div>

			<div className="col-md-4">
				<div className="card">
					<img src="https://images.pexels.com/photos/669621/pexels-photo-669621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Dashboard</h5>
						<p className="card-text">Discover al the metrics and reports that you need to stay informed.</p>
						<Link to='/'>
							<button className="btn btn-info btn-block mb-2" style={{ backgroundColor: "#adb5bd", borderColor: "#adb5bd" }}>Access</button>
						</Link>
					</div>
				</div>
			</div>

			<div className="col-md-4 mt-4">
				<div className="card">
					<img src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Users</h5>
						<p className="card-text">Inspect, create and edit all your users.</p>
						<Link to='/'>
							<button className="btn btn-info btn-block mb-2" style={{ backgroundColor: "#adb5bd", borderColor: "#adb5bd" }}>Access</button>
						</Link>
					</div>
				</div>
			</div>

		</div>
	</div>
)
