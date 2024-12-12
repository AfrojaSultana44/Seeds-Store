import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import React from "react";

const BasicModal = ({ header, body, open, handleOpen, height, width }) => {
  return (
    <Dialog open={open} handler={handleOpen}>
      <DialogHeader>{header}</DialogHeader>
      <DialogBody>{body}</DialogBody>
    </Dialog>
  );
};

export default BasicModal;
