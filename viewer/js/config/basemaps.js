define({
    map: true, // needs a refrence to the map
    title: 'Basemaps', // title for widget

    /* optional starting basemap
    / otherwise uses the basemap from the map
    / must match one of the keys in basemaps object below
    */
    //mapStartBasemap: 'streets',

    /* optional array of  basemaps to show in menu.
    / otherwise uses keys in basemaps object below
    / values in array must match keys in basemaps object
    */
    //basemapsToShow: ['streets', 'satellite', 'hybrid', 'topo', 'lightGray', 'gray', 'national-geographic', 'osm', 'oceans'],

    // define all valid basemaps here.
    basemaps: {
        streets: {
            title: 'Streets'
        },
        'streets-night-vector': { // requires v3.16 or higher
            title: 'Streets (Night)'
        },
        'streets-navigation-vector': { // requires v3.16 or higher
            title: 'Streets (Navigation)'
        },
        'streets-relief-vector': { // requires v3.16 or higher
            title: 'Street (Relief)'
        },
        satellite: {
            title: 'Satellite'
        },
        hybrid: {
            title: 'Hybrid'
        },
        topo: {
            title: 'Topo'
        },
        'terrain': {
            title: 'Terrain'
        },
        'gray-vector': { // requires v3.16 or higher
            title: 'Gray'
        },
        'dark-gray-vector': { // requires v3.16 or higher
            title: 'Dark Gray'
        },
        oceans: {
            title: 'Oceans'
        },
        'national-geographic': {
            title: 'Nat Geo'
        },
        osm: {
            title: 'Open Street Map'
        },
        LandsatShaded: {
            title: 'Landsat Shaded',
            basemap: {
                baseMapLayers: [
                    {
                        url: 'https://imagery.arcgisonline.com/arcgis/rest/services/LandsatGLS/LandsatShadedBasemap/ImageServer'
                    }
                ]
            }
        },
        EarthAtNight: {
            title: 'Earth at Night',
            basemap: {
                baseMapLayers: [
                    {
                        url: 'https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/Earth_at_Night_WM/MapServer'
                    }
                ]
            }
        },
        DavidRumseyMap1812: {
            title: 'David Rumsey 1812',
            basemap: {
                baseMapLayers: [
                    {
                        url: 'http://tiles.arcgis.com/tiles/IEuSomXfi6iB7a25/arcgis/rest/services/World_Globe_1812/MapServer'
                    }
                ]
            }
        }

        // additional examples of vector tile basemaps (requires v3.16 or higher)
        /*
        streetsVector: {
            title: 'Streets',
            basemap: {
                baseMapLayers: [
                    {
                        url: 'https://www.arcgis.com/sharing/rest/content/items/3b8814f6ddbd485cae67e8018992246e/resources/styles/root.json',
                        type: 'VectorTile'
                    }
                ]
            }
        },
        satelliteVector: {
            title: 'Satellite',
            basemap: {
                baseMapLayers: [
                    {
                        url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
                    }
                ]
            }
        },
        hybridVector: {
            title: 'Hybrid',
            basemap: {
                baseMapLayers: [
                    {
                        url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
                    },
                    {
                        url: 'https://www.arcgis.com/sharing/rest/content/items/1854498c7e35420b963a514a32689c80/resources/styles/root.json',
                        type: 'VectorTile',
                        isReference: true
                    }
                ]
            }
        },
        lightGrayVector: {
            title: 'Light Gray Canvas',
            basemap: {
                baseMapLayers: [
                    {
                        url: 'https://www.arcgis.com/sharing/rest/content/items/bdf1eec3fa79456c8c7c2bb62f86dade/resources/styles/root.json',
                        type: 'VectorTile'
                    }
                ]
            }
        },
        darkGrayVector: {
            title: 'Dark Gray Canvas',
            basemap: {
                baseMapLayers: [
                    {
                        url: 'https://www.arcgis.com/sharing/rest/content/items/3e3099d7302f4d99bc6f916dcc07ed59/resources/styles/root.json',
                        type: 'VectorTile'
                    }
                ]
            }
        },
        navigationVector: {
            title: 'Navigation',
            basemap: {
                baseMapLayers: [
                    {
                        url: 'https://www.arcgis.com/sharing/rest/content/items/00cd8e843bae49b3a040423e5d65416b/resources/styles/root.json',
                        type: 'VectorTile'
                    }
                ]
            }
        },
        streetsNightVector: {
            title: 'Streets Night',
            basemap: {
                baseMapLayers: [
                    {
                        url: 'https://www.arcgis.com/sharing/rest/content/items/f96366254a564adda1dc468b447ed956/resources/styles/root.json',
                        type: 'VectorTile'
                    }
                ]
            }
        },
        streetsReliefVector: {
            title: 'Streets w/ Relief',
            basemap: {
                baseMapLayers: [
                    {
                        url: 'https://www.arcgis.com/sharing/rest/content/items/ad06088bd1174866aad2dddbf5ec9642/resources/styles/root.json',
                        type: 'VectorTile'
                    }
                ]
            }
        },
        topoVector: {
            title: 'Topographic',
            basemap: {
                baseMapLayers: [
                    {
                        url: 'https://www.arcgis.com/sharing/rest/content/items/be44936bcdd24db588a1ae5076e36f34/resources/styles/root.json',
                        type: 'VectorTile'
                    }
                ]
            }
        }
        */
    }
});