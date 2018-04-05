import React from 'react';

import AlloyEditor from './loader-utils';

class AlloyEditorComponent extends React.Component {
  componentDidMount() {
    const {container, alloyEditorConfig} = this.props;

    AlloyEditor()
        .then((alloyeditor) => {
            this._editor = alloyeditor.editable(container, alloyEditorConfig);
        })
        .catch((e) => {
            console.log(e);
        });
  }

  componentWillUnmount() {
    this._editor.destroy();
  }

  render() {
    return (
      <div id={this.props.container}>
          <h1>AlloyEditor will make this content editable</h1>
              <p>
                  To install React, follow the instructions on <a href="https://github.com/facebook/react/">GitHub</a>.
              </p>
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel metus nunc. Maecenas rhoncus congue faucibus. Sed finibus ultrices turpis. Mauris nulla ante, aliquam a euismod ut, scelerisque nec sem. Nam dapibus ac nulla non ullamcorper. Sed vestibulum a velit non lobortis. Proin sit amet imperdiet urna. Aenean interdum urna augue, vel mollis tortor dictum vitae. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris vitae suscipit magna.
              </p>
      </div>
    );
  }
}

export default AlloyEditorComponent;
