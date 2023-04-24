import os from 'node:os';

export default () => {
  const cpuInfo = os.cpus();
  const coreInfos = cpuInfo.map((coreInfo) => {
    return {
      model: coreInfo.model,
      speed: Math.round((coreInfo.speed)/1000)
    };
  });

  return {
    amoundOfCPUs: coreInfos.length,
    coreInfos
  };
};