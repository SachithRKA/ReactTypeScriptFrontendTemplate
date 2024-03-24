export default {
    // other configurations...
  
    // Add this function
    exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      return defaultPathMap;
    },
  };