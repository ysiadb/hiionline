import React, { Component } from "react";
import $ from 'jquery';

import {
    ComposableMap,
    ZoomableGroup,
    Geographies,
    Geography
} from "react-simple-maps";

const wrapperStyles = {
    width: "100%",
    maxWidth: 980,
    margin: "0 auto"
};

class WorldMap extends Component {
    state = {
        highlighted: "",
        hovered: false
    };
    handleMove = geo => {
        if (this.state.hovered) return;
        console.log(geo.properties.NAME);

        $('.test').text(geo.properties.NAME);
        this.setState({
            hovered: true,
            highlighted: geo.properties.CONTINENT
        });
    };
    handleLeave = () => {
        this.setState({
            highlighted: "",
            hovered: false
        });
    };
  render() {
    return (
        <div style={wrapperStyles}>
            <ComposableMap
                projectionConfig={{
                    scale: 205,
                    rotation: [3, 0, 0]
                }}
                width={980}
                height={551}
                style={{
                    width: "100%",
                    height: "auto"
                }}
                >
                <ZoomableGroup center={[10, 20]} disablePanning>
                    <Geographies
                    geography="https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"
                    disableOptimization
                    >
                    {(geographies, projection) =>
                        geographies.map((geography, i) => (
                        <Geography
                            key={i}
                            cacheId={geography.properties.ISO_A3 + i}
                            geography={geography}
                            projection={projection}
                            onMouseMove={this.handleMove}
                            onMouseLeave={this.handleLeave}
                            style={{
                            default: {
                                fill:
                                geography.properties.CONTINENT ===
                                this.state.highlighted
                                    ? "#a56e2e"
                                    : "black",
                                    
                                fill:
                                geography.properties.NAME === "France" || geography.properties.NAME === "Mali"
                                    ? "00bab2"
                                    : "black",


                                stroke:
                                geography.properties.CONTINENT ===
                                this.state.highlighted
                                    ? "white"
                                    : "#B2A27D",
                                strokeWidth: 0.75,
                                outline: "none",
                                transition: "all 250ms"
                            },
                            hover: {
                                fill: "#f9cca5",
                                stroke: "white",
                                strokeWidth: 0.75,
                                outline: "none",
                                transition: "all 250ms"
                            },
                            pressed: {
                                fill: "#00bab2",
                                stroke: "white",
                                strokeWidth: 0.75,
                                outline: "none",
                                transition: "all 250ms"
                            }
                            }}
                        />
                        ))
                    }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>

            <section className="legende">
                <div className="true"></div>
                <div className="false"></div>
                <div className="test"></div>
            </section>

            
        </div>
    );
  }
}

export default WorldMap;
