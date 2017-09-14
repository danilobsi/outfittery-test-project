import angular from 'angular';
// import psLogger from 'shared/services/util/ps-logger';
// import psAbLogger from 'shared/services/util/ps-abLogger';
import psNavHeader from 'shared/components/navHeader';
import psFooter from 'components/footer';
// import psSectionHero from 'components/sectionHero';
// import psSectionBulletPoints from 'components/sectionBulletPoints';
// import psSectionFeature from 'components/sectionFeature';
// import psSectionSentence from 'components/sectionSentence';
import { calendarControllerName, calendarController } from './calendar.controller';
import dropdown from 'shared/components/dropdown'
import orderBtn from 'shared/components/orderBtn'
import './calendar.style.sass';
//import phoneNumberInput from 'shared/directives/phoneNumberInput/phoneNumberInput.js'

const MODULE_NAME = 'CalendarController';

angular.module(MODULE_NAME, [
  // Internal dependencies
  // psLogger,
  // psAbLogger,
  psNavHeader,
  psFooter,
  // psSectionHero,
  // psSectionBulletPoints,
  // psSectionFeature,
  // psSectionSentence,
  dropdown,
  orderBtn,
  //phoneNumberInput,
])
  .controller(calendarControllerName, calendarController);

export default MODULE_NAME;
