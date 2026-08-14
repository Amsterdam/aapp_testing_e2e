const isAndroid = MAESTRO_PLATFORM === 'Android'
console.log('isAndroid:', isAndroid)
output.boatChargingChargingLocation = isAndroid ? output.boatChargingChargingLocationAndroid : output.boatChargingChargingLocationiOS
output.boatChargingVcpsSessionName = isAndroid ? output.boatChargingVcpsSessionNameAndroid : output.boatChargingVcpsSessionNameiOS
output.boatChargingVcpsStationId = isAndroid ? output.boatChargingVcpsStationIdAndroid : output.boatChargingVcpsStationIdiOS
output.boatChargingVcpsModelType = isAndroid ? output.boatChargingVcpsModelTypeAndroid : output.boatChargingVcpsModelTypeiOS
output.boatChargingVcpsConnectors = isAndroid ? output.boatChargingVcpsConnectorsAndroid : output.boatChargingVcpsConnectorsiOS
output.boatChargingSocket = isAndroid ? output.boatChargingSocketAndroid : output.boatChargingSocketiOS