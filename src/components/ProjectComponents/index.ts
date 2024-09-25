//NOTE: unfortunately I cannot dynamically import and collect all projectConfig's from each projectConfig.ts file because of the way vite works.
// See: https://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility
import { ProjectConfig } from '../../types/project';

// Import project configs here
import semplaatsmanNlProjectConfig from './SemplaatsmanNlPortfolio/projectConfig';
import whoHasBeenCallingProjectConfig from './WhoHasBeenCalling/projectConfig';
import SPWAProjectConfig from './SPWA/projectConfig';
import theFelisFoundationConfig from './TheFelisFoundation/projectConfig';
import haarlemFestivalConfig from './HaarlemFestival/projectConfig';
import codeGenerationConfig from './CodeGeneration/projectConfig';
import theGardenGroupConfig from './TheGardenGroup/projectConfig';

// Add project configs to the array here
const projectConfigs: ProjectConfig[] = [
  semplaatsmanNlProjectConfig,
  whoHasBeenCallingProjectConfig,
  SPWAProjectConfig,
  theFelisFoundationConfig,
  haarlemFestivalConfig,
  codeGenerationConfig,
  theGardenGroupConfig,
];

export default projectConfigs;
