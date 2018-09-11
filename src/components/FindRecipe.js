import React from "react"

class FindRecipe extends React.Component
{
  render()
  {
    return(
      <section>
    		<div className="search">
    			<div className="container text-center">
    				<h3 className="font-weight-bold">Find food recipes</h3>
    				<p>Enter main food substance</p>
    				<form onSubmit = {this.props.getRecipe} className="form-inline">
    					<div className="form-group">
    						<input  type="text" name="substance" className="form-control input-lg" id="foodId" placeholder="food substance"/>
    					</div>
    				   <button className="btn btn-lg btn-success">Search</button>
    				</form>
            <p className="errorMessage">{this.props.error ? this.props.error : ''}</p>
    			</div>
    		</div>
  	</section>
    );
  }
}

/*const Titles = () =>(
  <div>
  <h1>Wheather Finder</h1>
  <p>Find out temperature, conditions and more...</p>
  </div>
);*/

export default FindRecipe;
