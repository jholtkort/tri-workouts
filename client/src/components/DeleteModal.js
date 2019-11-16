import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button } from "reactstrap";
import { connect } from "react-redux";

import { deleteWorkout } from "../actions";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

const DeleteModal = props => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = () => {
    props.deleteWorkout(props.id);

    handleClose();
  };

  return (
    <div>
      <Button className="waves-effect waves-light btn red" onClick={handleOpen}>
        <i className="material-icons">delete</i>
      </Button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Are you sure you want to delete?</h2>
          <p id="simple-modal-description">Confirm delete</p>
          <Button
            onClick={onSubmit}
            className="waves-effect waves-light btn red mr-2"
          >
            Delete <i className="material-icons">delete</i>
          </Button>
          <Button onClick={handleClose}>Cancel</Button>
        </div>
      </Modal>
    </div>
  );
};

export default connect(null, { deleteWorkout })(DeleteModal);

// import React, { Component } from "react";
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";

// import { deleteWorkout } from "../actions";

// class DeleteModal extends Component {
//   state = {
//     modal: false
//   };

//   static propTypes = {
//     deleteWorkout: PropTypes.func.isRequired
//   };

//   toggle = () => {
//     this.setState({
//       modal: !this.state.modal
//     });
//   };

//   onSubmit = () => {
//     this.props.deleteWorkout(this.props.id);

//     this.toggle();
//   };

//   render() {
//     return (
//       <div>
//         <Button
//           className="waves-effect waves-light btn red"
//           onClick={this.toggle}
//         >
//           <i className="material-icons">delete</i>
//         </Button>

//         <Modal isOpen={this.state.modal} toggle={this.toggle}>
//           <ModalHeader toggle={this.toggle}>
//             Are you sure you want to delete?
//           </ModalHeader>
//           <ModalBody>Confirm delete</ModalBody>
//           <ModalFooter>
//             <Button
//               onClick={this.onSubmit}
//               className="waves-effect waves-light btn red mr-2"
//             >
//               Delete <i className="material-icons">delete</i>
//             </Button>
//             <Button onClick={this.toggle}>Cancel</Button>
//           </ModalFooter>
//         </Modal>
//       </div>
//     );
//   }
// }

// export default connect(null, { deleteWorkout })(DeleteModal);
