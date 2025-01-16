import React from "react";
import PropTypes from "prop-types";

import CellMask from "./CellMask";

function CopyMask({
  copiedPosition,
  copiedRange,
  innerRef,
  getSelectedDimensions,
}) {
  if (copiedRange) {
    const { topLeft, bottomRight } = copiedRange;
    const masks = [];

    // Create a mask for each cell in the range
    for (let rowIdx = topLeft.rowIdx; rowIdx <= bottomRight.rowIdx; rowIdx++) {
      for (let idx = topLeft.idx; idx <= bottomRight.idx; idx++) {
        const dimensions = getSelectedDimensions({ rowIdx, idx });
        masks.push(
          <CellMask
            key={`copy-mask-${rowIdx}-${idx}`}
            {...dimensions}
            className="react-grid-cell-copied"
          />
        );
      }
    }

    // The innerRef goes on the first mask
    if (masks.length > 0) {
      masks[0] = React.cloneElement(masks[0], { innerRef });
    }

    return <>{masks}</>;
  }

  // Single cell copy case
  const dimensions = getSelectedDimensions(copiedPosition);
  return (
    <CellMask
      {...dimensions}
      className="react-grid-cell-copied"
      innerRef={innerRef}
    />
  );
}

CopyMask.propTypes = {
  copiedPosition: PropTypes.object,
  copiedRange: PropTypes.object,
  getSelectedDimensions: PropTypes.func.isRequired,
  innerRef: PropTypes.func.isRequired,
};

export default CopyMask;
