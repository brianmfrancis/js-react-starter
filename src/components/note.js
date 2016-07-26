import React, { Component } from 'react';
import Draggable from 'react-draggable';
import marked from 'marked';
import Textarea from 'react-textarea-autosize';

class Note extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
    };

    this.onEdit = this.onEdit.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onDrag = this.onDrag.bind(this);
    this.onStopDrag = this.onStopDrag.bind(this);
  }

  onDelete() {
    console.log('clicked delete');
    this.props.onDelete(this.props.id);
  }

  onEdit() {
    console.log('clicked edit');
    this.setState({ isEditing: !this.state.isEditing });
  }

  onChange() {
    console.log('change');
    this.props.onSave(this.props.id, { text: document.getElementById('textarea').value });
  }

  onSave() {
    console.log('clicked save');
    this.setState({ isEditing: !this.state.isEditing });
  }

  onDrag(e, ui) {
    // from drag example online
    const currentx = this.state.x;
    const currenty = this.state.y;
    this.setState({
      x: currentx + ui.deltaX,
      y: currenty + ui.deltaY,
    });
    this.props.editNote(this.props.id, this.state);
  }

  onStopDrag() {
    this.props.editNote(this.props.id, this.state);
  }

  renderSomeSection() {
    if (this.state.isEditing) {
      return (
        // from dragable site
        <div> <Textarea id="textarea" defaultValue={this.props.text} onChange={this.onChange} /></div>
      );
    } else {
      return (
        <div dangerouslySetInnerHTML={{ __html: marked(this.props.text || '') }} />
      );
    }
  }
  render() {
    return (
      <Draggable
        handle=".handle"
        defaultPosition={{ x: 40, y: 40 }}
        position={null}
        grid={[25, 25]}
        zIndex={100}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}
      >
        <div id="note">
          <span id="notetop">
            <div>
              <a>{this.props.title}</a>
            </div>
            <div>
              <i className="fa fa-trash-o" aria-hidden="true" onClick={this.onDelete}></i>
            </div>
            <div>
              <i className="fa fa-pencil" aria-hidden="true" onClick={this.onEdit}></i>
            </div>
            <div className="handle">
              <i className="fa fa-arrows-alt"></i>
            </div>
          </span>
          <div>
            {this.renderSomeSection()}
          </div>
        </div>
      </Draggable>
    );
  }

}

export default Note;
