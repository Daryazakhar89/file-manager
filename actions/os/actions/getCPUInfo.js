import os from 'node:os';

export default () => {
  const cpuInfo = os.cpus();
  const coreInfos = cpuInfo.map((coreInfo) => {
    const speedInGHz = Math.round((coreInfo.speed)/1000);
    return {
      model: coreInfo.model,
      speed: speedInGHz
    };
  });

  return {
    amoundOfCPUs: coreInfos.length,
    coreInfos
  };
}

// work correctly
// os --cpus