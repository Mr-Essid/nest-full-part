'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">mohamed documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-6f2798d5b4b4da9052a3bd14fb489185f5a2b0164419827abd82276705a2484ee4e23afb326e9a356a83e15e97e33eec18c7c7a5e2943629b889249ac56083ea"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-6f2798d5b4b4da9052a3bd14fb489185f5a2b0164419827abd82276705a2484ee4e23afb326e9a356a83e15e97e33eec18c7c7a5e2943629b889249ac56083ea"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-6f2798d5b4b4da9052a3bd14fb489185f5a2b0164419827abd82276705a2484ee4e23afb326e9a356a83e15e97e33eec18c7c7a5e2943629b889249ac56083ea"' :
                                            'id="xs-controllers-links-module-AuthModule-6f2798d5b4b4da9052a3bd14fb489185f5a2b0164419827abd82276705a2484ee4e23afb326e9a356a83e15e97e33eec18c7c7a5e2943629b889249ac56083ea"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-6f2798d5b4b4da9052a3bd14fb489185f5a2b0164419827abd82276705a2484ee4e23afb326e9a356a83e15e97e33eec18c7c7a5e2943629b889249ac56083ea"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-6f2798d5b4b4da9052a3bd14fb489185f5a2b0164419827abd82276705a2484ee4e23afb326e9a356a83e15e97e33eec18c7c7a5e2943629b889249ac56083ea"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-6f2798d5b4b4da9052a3bd14fb489185f5a2b0164419827abd82276705a2484ee4e23afb326e9a356a83e15e97e33eec18c7c7a5e2943629b889249ac56083ea"' :
                                        'id="xs-injectables-links-module-AuthModule-6f2798d5b4b4da9052a3bd14fb489185f5a2b0164419827abd82276705a2484ee4e23afb326e9a356a83e15e97e33eec18c7c7a5e2943629b889249ac56083ea"' }>
                                        <li class="link">
                                            <a href="injectables/AtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TokenService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TokenService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/EventsModule.html" data-type="entity-link" >EventsModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/GeminiModule.html" data-type="entity-link" >GeminiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-GeminiModule-7385bd0bc765de9ab823aa236df921546e25cbc5b8e6c90140cdc360c52632a2f585e70a485e95670570e76eef3cb66c7ced21c8c5492ddf51cdfd33711c9889"' : 'data-bs-target="#xs-controllers-links-module-GeminiModule-7385bd0bc765de9ab823aa236df921546e25cbc5b8e6c90140cdc360c52632a2f585e70a485e95670570e76eef3cb66c7ced21c8c5492ddf51cdfd33711c9889"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-GeminiModule-7385bd0bc765de9ab823aa236df921546e25cbc5b8e6c90140cdc360c52632a2f585e70a485e95670570e76eef3cb66c7ced21c8c5492ddf51cdfd33711c9889"' :
                                            'id="xs-controllers-links-module-GeminiModule-7385bd0bc765de9ab823aa236df921546e25cbc5b8e6c90140cdc360c52632a2f585e70a485e95670570e76eef3cb66c7ced21c8c5492ddf51cdfd33711c9889"' }>
                                            <li class="link">
                                                <a href="controllers/GeminiController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GeminiController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-GeminiModule-7385bd0bc765de9ab823aa236df921546e25cbc5b8e6c90140cdc360c52632a2f585e70a485e95670570e76eef3cb66c7ced21c8c5492ddf51cdfd33711c9889"' : 'data-bs-target="#xs-injectables-links-module-GeminiModule-7385bd0bc765de9ab823aa236df921546e25cbc5b8e6c90140cdc360c52632a2f585e70a485e95670570e76eef3cb66c7ced21c8c5492ddf51cdfd33711c9889"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GeminiModule-7385bd0bc765de9ab823aa236df921546e25cbc5b8e6c90140cdc360c52632a2f585e70a485e95670570e76eef3cb66c7ced21c8c5492ddf51cdfd33711c9889"' :
                                        'id="xs-injectables-links-module-GeminiModule-7385bd0bc765de9ab823aa236df921546e25cbc5b8e6c90140cdc360c52632a2f585e70a485e95670570e76eef3cb66c7ced21c8c5492ddf51cdfd33711c9889"' }>
                                        <li class="link">
                                            <a href="injectables/GeminiService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GeminiService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MailerModule.html" data-type="entity-link" >MailerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MailerModule-2d3b4d111eff97b58cdf2f8b93a183cbf16aa101e64d61915f91dedfcf3dbd9c63808b3145285352a2fb8d33a4786136ea596a96c3eeb751ebc3bafac126ac1b"' : 'data-bs-target="#xs-controllers-links-module-MailerModule-2d3b4d111eff97b58cdf2f8b93a183cbf16aa101e64d61915f91dedfcf3dbd9c63808b3145285352a2fb8d33a4786136ea596a96c3eeb751ebc3bafac126ac1b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MailerModule-2d3b4d111eff97b58cdf2f8b93a183cbf16aa101e64d61915f91dedfcf3dbd9c63808b3145285352a2fb8d33a4786136ea596a96c3eeb751ebc3bafac126ac1b"' :
                                            'id="xs-controllers-links-module-MailerModule-2d3b4d111eff97b58cdf2f8b93a183cbf16aa101e64d61915f91dedfcf3dbd9c63808b3145285352a2fb8d33a4786136ea596a96c3eeb751ebc3bafac126ac1b"' }>
                                            <li class="link">
                                                <a href="controllers/MailerController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MailerController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MailerModule-2d3b4d111eff97b58cdf2f8b93a183cbf16aa101e64d61915f91dedfcf3dbd9c63808b3145285352a2fb8d33a4786136ea596a96c3eeb751ebc3bafac126ac1b"' : 'data-bs-target="#xs-injectables-links-module-MailerModule-2d3b4d111eff97b58cdf2f8b93a183cbf16aa101e64d61915f91dedfcf3dbd9c63808b3145285352a2fb8d33a4786136ea596a96c3eeb751ebc3bafac126ac1b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MailerModule-2d3b4d111eff97b58cdf2f8b93a183cbf16aa101e64d61915f91dedfcf3dbd9c63808b3145285352a2fb8d33a4786136ea596a96c3eeb751ebc3bafac126ac1b"' :
                                        'id="xs-injectables-links-module-MailerModule-2d3b4d111eff97b58cdf2f8b93a183cbf16aa101e64d61915f91dedfcf3dbd9c63808b3145285352a2fb8d33a4786136ea596a96c3eeb751ebc3bafac126ac1b"' }>
                                        <li class="link">
                                            <a href="injectables/MailerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MailerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MatchModule.html" data-type="entity-link" >MatchModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MatchModule-d423bebbf34813b8f33fb769ca237481b8019ce9cb6621784c20cc151710fdb66db046545fbc5630fa17fadae90fee7f3e82e27365fc9b502adf2b188e72f5ad"' : 'data-bs-target="#xs-controllers-links-module-MatchModule-d423bebbf34813b8f33fb769ca237481b8019ce9cb6621784c20cc151710fdb66db046545fbc5630fa17fadae90fee7f3e82e27365fc9b502adf2b188e72f5ad"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MatchModule-d423bebbf34813b8f33fb769ca237481b8019ce9cb6621784c20cc151710fdb66db046545fbc5630fa17fadae90fee7f3e82e27365fc9b502adf2b188e72f5ad"' :
                                            'id="xs-controllers-links-module-MatchModule-d423bebbf34813b8f33fb769ca237481b8019ce9cb6621784c20cc151710fdb66db046545fbc5630fa17fadae90fee7f3e82e27365fc9b502adf2b188e72f5ad"' }>
                                            <li class="link">
                                                <a href="controllers/MatchController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MatchController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MatchModule-d423bebbf34813b8f33fb769ca237481b8019ce9cb6621784c20cc151710fdb66db046545fbc5630fa17fadae90fee7f3e82e27365fc9b502adf2b188e72f5ad"' : 'data-bs-target="#xs-injectables-links-module-MatchModule-d423bebbf34813b8f33fb769ca237481b8019ce9cb6621784c20cc151710fdb66db046545fbc5630fa17fadae90fee7f3e82e27365fc9b502adf2b188e72f5ad"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MatchModule-d423bebbf34813b8f33fb769ca237481b8019ce9cb6621784c20cc151710fdb66db046545fbc5630fa17fadae90fee7f3e82e27365fc9b502adf2b188e72f5ad"' :
                                        'id="xs-injectables-links-module-MatchModule-d423bebbf34813b8f33fb769ca237481b8019ce9cb6621784c20cc151710fdb66db046545fbc5630fa17fadae90fee7f3e82e27365fc9b502adf2b188e72f5ad"' }>
                                        <li class="link">
                                            <a href="injectables/MatchService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MatchService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MatchPlayerModule.html" data-type="entity-link" >MatchPlayerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MatchPlayerModule-bc18a97ed065f40fa34f44e4d6331dbbae95475b207881756c0989c5a421c97a0d11d53bbecd7c54e7d8fbec867e132bca415373f59df7727efb217646c096ce"' : 'data-bs-target="#xs-controllers-links-module-MatchPlayerModule-bc18a97ed065f40fa34f44e4d6331dbbae95475b207881756c0989c5a421c97a0d11d53bbecd7c54e7d8fbec867e132bca415373f59df7727efb217646c096ce"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MatchPlayerModule-bc18a97ed065f40fa34f44e4d6331dbbae95475b207881756c0989c5a421c97a0d11d53bbecd7c54e7d8fbec867e132bca415373f59df7727efb217646c096ce"' :
                                            'id="xs-controllers-links-module-MatchPlayerModule-bc18a97ed065f40fa34f44e4d6331dbbae95475b207881756c0989c5a421c97a0d11d53bbecd7c54e7d8fbec867e132bca415373f59df7727efb217646c096ce"' }>
                                            <li class="link">
                                                <a href="controllers/MatchPlayerController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MatchPlayerController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MatchPlayerModule-bc18a97ed065f40fa34f44e4d6331dbbae95475b207881756c0989c5a421c97a0d11d53bbecd7c54e7d8fbec867e132bca415373f59df7727efb217646c096ce"' : 'data-bs-target="#xs-injectables-links-module-MatchPlayerModule-bc18a97ed065f40fa34f44e4d6331dbbae95475b207881756c0989c5a421c97a0d11d53bbecd7c54e7d8fbec867e132bca415373f59df7727efb217646c096ce"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MatchPlayerModule-bc18a97ed065f40fa34f44e4d6331dbbae95475b207881756c0989c5a421c97a0d11d53bbecd7c54e7d8fbec867e132bca415373f59df7727efb217646c096ce"' :
                                        'id="xs-injectables-links-module-MatchPlayerModule-bc18a97ed065f40fa34f44e4d6331dbbae95475b207881756c0989c5a421c97a0d11d53bbecd7c54e7d8fbec867e132bca415373f59df7727efb217646c096ce"' }>
                                        <li class="link">
                                            <a href="injectables/MatchPlayerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MatchPlayerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MessageModule.html" data-type="entity-link" >MessageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MessageModule-054e9cf636245fea5691011300e2022538f63ab0b7db1c28fc75a271c4348a65ea04bc4776ec4905ee29b6e66159559632268c184ef6980639c6c478918dcac6"' : 'data-bs-target="#xs-controllers-links-module-MessageModule-054e9cf636245fea5691011300e2022538f63ab0b7db1c28fc75a271c4348a65ea04bc4776ec4905ee29b6e66159559632268c184ef6980639c6c478918dcac6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MessageModule-054e9cf636245fea5691011300e2022538f63ab0b7db1c28fc75a271c4348a65ea04bc4776ec4905ee29b6e66159559632268c184ef6980639c6c478918dcac6"' :
                                            'id="xs-controllers-links-module-MessageModule-054e9cf636245fea5691011300e2022538f63ab0b7db1c28fc75a271c4348a65ea04bc4776ec4905ee29b6e66159559632268c184ef6980639c6c478918dcac6"' }>
                                            <li class="link">
                                                <a href="controllers/MessageController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MessageController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MessageModule-054e9cf636245fea5691011300e2022538f63ab0b7db1c28fc75a271c4348a65ea04bc4776ec4905ee29b6e66159559632268c184ef6980639c6c478918dcac6"' : 'data-bs-target="#xs-injectables-links-module-MessageModule-054e9cf636245fea5691011300e2022538f63ab0b7db1c28fc75a271c4348a65ea04bc4776ec4905ee29b6e66159559632268c184ef6980639c6c478918dcac6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MessageModule-054e9cf636245fea5691011300e2022538f63ab0b7db1c28fc75a271c4348a65ea04bc4776ec4905ee29b6e66159559632268c184ef6980639c6c478918dcac6"' :
                                        'id="xs-injectables-links-module-MessageModule-054e9cf636245fea5691011300e2022538f63ab0b7db1c28fc75a271c4348a65ea04bc4776ec4905ee29b6e66159559632268c184ef6980639c6c478918dcac6"' }>
                                        <li class="link">
                                            <a href="injectables/MessageService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MessageService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TerrainModule.html" data-type="entity-link" >TerrainModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-TerrainModule-77d3122bfacc8f320e65eebb40858e49ca1da3f3d4487e6d1d98bac34ff9243466b593c6bf8907cfe589261d54c443dabbadfe8d1696835e7e43708e05bc0fe0"' : 'data-bs-target="#xs-controllers-links-module-TerrainModule-77d3122bfacc8f320e65eebb40858e49ca1da3f3d4487e6d1d98bac34ff9243466b593c6bf8907cfe589261d54c443dabbadfe8d1696835e7e43708e05bc0fe0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TerrainModule-77d3122bfacc8f320e65eebb40858e49ca1da3f3d4487e6d1d98bac34ff9243466b593c6bf8907cfe589261d54c443dabbadfe8d1696835e7e43708e05bc0fe0"' :
                                            'id="xs-controllers-links-module-TerrainModule-77d3122bfacc8f320e65eebb40858e49ca1da3f3d4487e6d1d98bac34ff9243466b593c6bf8907cfe589261d54c443dabbadfe8d1696835e7e43708e05bc0fe0"' }>
                                            <li class="link">
                                                <a href="controllers/TerrainController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TerrainController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TerrainModule-77d3122bfacc8f320e65eebb40858e49ca1da3f3d4487e6d1d98bac34ff9243466b593c6bf8907cfe589261d54c443dabbadfe8d1696835e7e43708e05bc0fe0"' : 'data-bs-target="#xs-injectables-links-module-TerrainModule-77d3122bfacc8f320e65eebb40858e49ca1da3f3d4487e6d1d98bac34ff9243466b593c6bf8907cfe589261d54c443dabbadfe8d1696835e7e43708e05bc0fe0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TerrainModule-77d3122bfacc8f320e65eebb40858e49ca1da3f3d4487e6d1d98bac34ff9243466b593c6bf8907cfe589261d54c443dabbadfe8d1696835e7e43708e05bc0fe0"' :
                                        'id="xs-injectables-links-module-TerrainModule-77d3122bfacc8f320e65eebb40858e49ca1da3f3d4487e6d1d98bac34ff9243466b593c6bf8907cfe589261d54c443dabbadfe8d1696835e7e43708e05bc0fe0"' }>
                                        <li class="link">
                                            <a href="injectables/TerrainService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TerrainService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserModule-612c932e189110329ce5b707133db9b1f1a5ca2a68427e720791ed03e34feb89196b8eebc05175721a738d76c27d573ad29437542688ef0a9f7bac9911ba99d0"' : 'data-bs-target="#xs-controllers-links-module-UserModule-612c932e189110329ce5b707133db9b1f1a5ca2a68427e720791ed03e34feb89196b8eebc05175721a738d76c27d573ad29437542688ef0a9f7bac9911ba99d0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-612c932e189110329ce5b707133db9b1f1a5ca2a68427e720791ed03e34feb89196b8eebc05175721a738d76c27d573ad29437542688ef0a9f7bac9911ba99d0"' :
                                            'id="xs-controllers-links-module-UserModule-612c932e189110329ce5b707133db9b1f1a5ca2a68427e720791ed03e34feb89196b8eebc05175721a738d76c27d573ad29437542688ef0a9f7bac9911ba99d0"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-612c932e189110329ce5b707133db9b1f1a5ca2a68427e720791ed03e34feb89196b8eebc05175721a738d76c27d573ad29437542688ef0a9f7bac9911ba99d0"' : 'data-bs-target="#xs-injectables-links-module-UserModule-612c932e189110329ce5b707133db9b1f1a5ca2a68427e720791ed03e34feb89196b8eebc05175721a738d76c27d573ad29437542688ef0a9f7bac9911ba99d0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-612c932e189110329ce5b707133db9b1f1a5ca2a68427e720791ed03e34feb89196b8eebc05175721a738d76c27d573ad29437542688ef0a9f7bac9911ba99d0"' :
                                        'id="xs-injectables-links-module-UserModule-612c932e189110329ce5b707133db9b1f1a5ca2a68427e720791ed03e34feb89196b8eebc05175721a738d76c27d573ad29437542688ef0a9f7bac9911ba99d0"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/GeminiController.html" data-type="entity-link" >GeminiController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/MailerController.html" data-type="entity-link" >MailerController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/MatchController.html" data-type="entity-link" >MatchController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/MatchPlayerController.html" data-type="entity-link" >MatchPlayerController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/MessageController.html" data-type="entity-link" >MessageController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TerrainController.html" data-type="entity-link" >TerrainController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AllExceptionsFilter.html" data-type="entity-link" >AllExceptionsFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateMatchDto.html" data-type="entity-link" >CreateMatchDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateMatchPlayerDto.html" data-type="entity-link" >CreateMatchPlayerDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateMessageDto.html" data-type="entity-link" >CreateMessageDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTerrainDto.html" data-type="entity-link" >CreateTerrainDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/EventsGateway.html" data-type="entity-link" >EventsGateway</a>
                            </li>
                            <li class="link">
                                <a href="classes/GeminiMessageDto.html" data-type="entity-link" >GeminiMessageDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Match.html" data-type="entity-link" >Match</a>
                            </li>
                            <li class="link">
                                <a href="classes/MatchPlayer.html" data-type="entity-link" >MatchPlayer</a>
                            </li>
                            <li class="link">
                                <a href="classes/Message.html" data-type="entity-link" >Message</a>
                            </li>
                            <li class="link">
                                <a href="classes/RtGuard.html" data-type="entity-link" >RtGuard</a>
                            </li>
                            <li class="link">
                                <a href="classes/SendMailDto.html" data-type="entity-link" >SendMailDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignupDto.html" data-type="entity-link" >SignupDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Terrain.html" data-type="entity-link" >Terrain</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateMatchDto.html" data-type="entity-link" >UpdateMatchDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateMatchPlayerDto.html" data-type="entity-link" >UpdateMatchPlayerDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateMessageDto.html" data-type="entity-link" >UpdateMessageDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTerrainDto.html" data-type="entity-link" >UpdateTerrainDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AtGuard.html" data-type="entity-link" >AtGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AtStrategy.html" data-type="entity-link" >AtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CustomResponseInterceptor.html" data-type="entity-link" >CustomResponseInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GeminiService.html" data-type="entity-link" >GeminiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MailerService.html" data-type="entity-link" >MailerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MatchPlayerService.html" data-type="entity-link" >MatchPlayerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MatchService.html" data-type="entity-link" >MatchService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MessageService.html" data-type="entity-link" >MessageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RtStrategy.html" data-type="entity-link" >RtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TerrainService.html" data-type="entity-link" >TerrainService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TokenService.html" data-type="entity-link" >TokenService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ApiResponse.html" data-type="entity-link" >ApiResponse</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});