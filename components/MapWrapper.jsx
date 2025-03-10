"use client";

import { memo } from "react";

const MapWrapper = memo(() => {
    return <div id="map-container" className="w-full h-full"></div>;
}, () => true);

export default MapWrapper;