import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-accessibility-plugin/plugins/css/bootstrap-accessibility.css';
import '../resources/styles/readium_js.css';
import '../resources/styles/sourcesanspro.css';
import '../resources/styles/viewer.css';
import '../resources/styles/viewer_audio.css';
import '../resources/styles/settings.css';
import '../resources/styles/library.css';

/*
    <link rel="stylesheet" type="text/css" href="../node_modules/bootstrap/dist/css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="../node_modules/bootstrap-accessibility-plugin/plugins/css/bootstrap-accessibility.css">

    <link rel="stylesheet" type="text/css" href="../src/css/sourcesanspro.css">
    <link rel="stylesheet" type="text/css" href="../src/css/readium_js.css">
    <link rel="stylesheet" type="text/css" href="../src/css/viewer.css">
    <link rel="stylesheet" type="text/css" href="../src/css/viewer_audio.css">
    <link rel="stylesheet" type="text/css" href="../src/css/settings.css">
    <link rel="stylesheet" type="text/css" href="../src/css/library.css">
 */
import { initialize } from './ReadiumViewer';

initialize();
