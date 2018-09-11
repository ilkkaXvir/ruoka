import React from "react"

class FoundFoodDishes extends React.Component
{

  constructor() {
      super();
      this.openWindow = this.openWindow.bind(this);
  }

  addContent()
  {

    var content = "";

    if(this.props.ready)
    {
      for(var i = 1; i < this.props.image.length; i++)
      {

        var j = i - 1;

        if( i % 3 == 1  || i == this.props.image.length)
        {
          console.log("/div  i on" + i);
          content = content.concat("</div>");
        }

        if(i == 1 || i %3 == 1)
        {
          console.log("div row  i on" + i);
          content = content.concat('<div class="row">');
        }
          content = content.concat('<div class="col-sm-4">');
          content = content.concat('<h4 class="foodName">'+ this.props.title[j] +'</h4>');
          content = content.concat('<a id="' + j + '" href="' + this.props.url[j] + '" target="_blank"></a>');
          content = content.concat('<img src="' + this.props.image[j] + '" class="foodImage" alt="image" height="300" width="300" onClick="document.getElementById(' + j +').click()"/>');
          content = content.concat("</div>");
      }
      console.log(content);
    }

    return <div dangerouslySetInnerHTML={{__html: content}}></div>;

  }

openWindow(x)
{
  if(this.props.ready)
  {
    window.open(x, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
  }
}

  render()
  {
    return(
    <section>
        <div className="page-header foundDishes">
             {this.props.image[0] ? <h2> {this.props.substance} dishes </h2> : ''}
        </div>
           {this.props.ready ? this.addContent() : ''}
      </section>
    );
  }
}

export default FoundFoodDishes;
