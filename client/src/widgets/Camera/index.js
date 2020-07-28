import React from 'react';
import { Camera as InternalCamera, FACING_MODES } from 'react-html5-camera-photo';


const Camera = () => {

    return <InternalCamera onTakePhoto={() => console.log("camera clicked")} idealFacingMode={FACING_MODES.ENVIRONMENT} />
}
export default Camera;