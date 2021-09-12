import React from "react";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { Button } from "react-bootstrap";

function Bpopover(props) {
  return (
    <>
      {["top", "right", "bottom", "left"].map((placement) => (
        <>
          <OverlayTrigger
            trigger="click"
            key={placement}
            placement={placement}
            overlay={
              <Popover id={`popover-positioned-${placement}`}>
                <Popover.Header as="h3">{`Popover ${placement}`}</Popover.Header>
                <Popover.Body>
                  <strong>Hello boys/girls!</strong> Check this info.
                </Popover.Body>
              </Popover>
            }
          >
            <Button variant="secondary">Popover on {placement}</Button>
          </OverlayTrigger>
          <br />
          <br />
        </>
      ))}
    </>
  );
}

export default Bpopover;
