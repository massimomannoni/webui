import React, { Component } from "react";

class ProductTradeFrom extends Component {

  render() {

    // data: The data to be rendered
    // schema : the JSON schema that describes the underlying data
    // uischema: the UI schema that describes how the form should be rendered. If none is provided a default layout is used
    //renderers: The renderers that should be used for rendering the form
    
    const data = "";
    const schema = "";
    const uiSchema = "";

    return (
      <div>
        <div>This Is My From</div>

        <JsonForms
          schema={schema}
          uischema={uiSchema}
          data={data}
          cells={materialCells}
        />
      </div>
    );
  }
}

export  default ProductTradeFrom;