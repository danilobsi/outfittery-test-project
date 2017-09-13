import angular from 'angular';
import psLogger from 'shared/services/util/ps-logger';
import psAbLogger from 'shared/services/util/ps-abLogger';
import psNavHeader from 'shared/components/navHeader';
import psFooter from 'components/footer';
import psSectionHero from 'components/sectionHero';
import psSectionBulletPoints from 'components/sectionBulletPoints';
import psSectionFeature from 'components/sectionFeature';
import psSectionSentence from 'components/sectionSentence';
import { successControllerName, successController } from './success.controller';
//import dropdown from 'shared/components/dropdown'
//import orderBtn from 'shared/components/orderBtn'
//import phoneNumberInput from 'shared/directives/phoneNumberInput/phoneNumberInput.js'

const MODULE_NAME = 'SuccessController';

angular.module(MODULE_NAME, [
  // Internal dependencies
  psLogger,
  psAbLogger,
  psNavHeader,
  psFooter,
  psSectionHero,
  psSectionBulletPoints,
  psSectionFeature,
  psSectionSentence,
//   dropdown,
//   orderBtn,
  //phoneNumberInput,
])
  .controller(successControllerName, successController);

export default MODULE_NAME;