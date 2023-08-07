import UAParser from 'ua-parser-js'

const uaParser = new UAParser()

export interface UseDeviceInfoHook {
  isMobileDevice: boolean
}

const isMobileDevice = uaParser.getDevice().type?.toLowerCase().includes('mobile') ?? false
const isTabletDevice = uaParser.getDevice().type?.toLowerCase().includes('tablet') ?? false

const hookInfo: UseDeviceInfoHook = {
  isMobileDevice: isMobileDevice || isTabletDevice,
}

export default function useDeviceInfo(): UseDeviceInfoHook {
  return hookInfo
}
