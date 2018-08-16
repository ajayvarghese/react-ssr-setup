import React from 'react';
import classNames from 'classnames';
import styles from './contact.css';

const Home = () => {
  return (
    <div>
        <section className="banner">
          <div className="banner__content">
            <div className="banner__content-img tw-enterprise-graph"></div>
            <div className="banner__title">
              <span id="bannerTitleText1">RAZORTHINK </span>
              <span className="bold" id="bannerTitleText2">AI</span>
            </div>
            <div className="banner__text tw-banner__text">
              <div>
                <span>THE</span>
              </div>
              <div className="highlight">
                <span>FIRST TRUE</span>
              </div>
              <div>
                <span>ENTERPRISE GRADE</span>
              </div>
              <div>
                <span>AI PLATFORM</span>
              </div>
            </div>
          </div>
          <div className="banner__footer tw-banner__footer" data-tween-to-top>
            <div className="banner__footer__card" data-scrollto="visual-ai-studio">
              <h4 className="banner__footer__card-title">VISUAL AI
                <br />STUDIO</h4>
              <p className="banner__footer__card-desc">Prototype, build and manage complex AI models with an easy to use visual interface.</p>
            </div>
            <div className="banner__footer__card" data-scrollto="cutting-edge-dl">
              <h4 className="banner__footer__card-title">CUTTING EDGE
                <br /> DL AND AUTO-ML</h4>
              <p className="banner__footer__card-desc">Build complex AI solutions using the latest out-of-the box DL algorithms or make effortless predictions with Auto-ML.</p>
            </div>
            <div className="banner__footer__card" data-scrollto="architecture">
              <h4 className="banner__footer__card-title">ENTERPRISE ARCHITECTURE</h4>
              <p className="banner__footer__card-desc">Collaborate. Deploy. Monitor. Scale. Everything that you’d expect to securely craft an enterprise ready AI solution.</p>
            </div>
            <div className="banner__footer__card" data-scrollto="ai-solutions">
              <h4 className="banner__footer__card-title">BUSINESS READY
                <br/> AI SOLUTIONS
                </h4>
              <p className="banner__footer__card-desc">Create AI Solutions using active learning, last mile enablement and closed loop architectures.</p>
            </div>
          </div>
        </section>
  
        <div className="content">
    
          <section className="home-section ai-studio" id="visual-ai-studio">
            <div className={classNames("home-section__content", styles["width-container"], "clearfix")} data-parallax-scene="px-ai-studio">
              <div className="ai-studio__left">
                <div>
                  <div className="section__main-title tw-title" data-tween-trigger data-visibility="dp">
                    <div data-tween-el>
                      <span className="tw-title-bg"></span>
                      <span className="tw-title-text">VISUAL</span>
                    </div>
                    <br />
                    <div data-tween-el>
                      <span className="tw-title-bg"></span>
                      <span className="tw-title-text">AI</span>
                    </div>
                    <br />
                    <div data-tween-el>
                      <span className="tw-title-bg"></span>
                      <span className="tw-title-text">STUDIO</span>
                    </div>
                  </div>
                  <div className="section__main-title tw-title" data-tween-trigger data-visibility="mb">
                    <div data-tween-el>
                      <span className="tw-title-bg"></span>
                      <span className="tw-title-text">VISUAL AI</span>
                    </div>
                    <br />
                    <div data-tween-el>
                      <span className="tw-title-bg"></span>
                      <span className="tw-title-text">STUDIO</span>
                    </div>
                  </div>
                  <div className="ai-studio__desc" data-tween-trigger>
                    <h4 className="section-title" data-fade-element>Everything from data wrangling to model governance</h4>
                    <p data-fade-element>Razorthink AI Studio lets you visually build data transformation recipes, DL/ML/Hybrid models and end-to-end
                      pipelines that ingest data from your enterprise environment and create intelligence feeding your business
                      systems.</p>
                    <button className='btn-type1'>READ MORE</button>
                  </div>
                </div>
              </div>
              <div className="ai-studio__right">
                <div className="ai-studio__preview">
                  <img src="./images/AI-Platform/hero/screenshot.png" />
                </div>
                <div className="ai-studio__card-list" data-tween-trigger>
                  <div className="ai-studio__card" data-stagger-card>
                    <h4>Visual Builder</h4>
                    <div className="ai-studio__card__image">
                      <img src="./images/Home/section-3/visual builder.png" />
                    </div>
                    <p>Easily build data transformations, DL models and pipelines in a drag-n-drop interface.</p>
                  </div>
                  <div className="ai-studio__card" data-stagger-card>
                    <h4>Data Visualization</h4>
                    <div className="ai-studio__card__image">
                      <img src="./images/Home/section-3/data viz.png" />
                    </div>
                    <p>Uncover insights from your data with sophisticated data visualization.</p>
                  </div>
                  <div className="ai-studio__card" data-stagger-card>
                    <h4>Model Management</h4>
                    <div className="ai-studio__card__image">
                      <img src="./images/Home/section-3/model manage.png" />
                    </div>
                    <p>Automatic versioning of models make comparison and governance simple and efficient.</p>
                  </div>
                  <div className="ai-studio__card" data-stagger-card>
                    <h4>Deploy and Monitor</h4>
                    <div className="ai-studio__card__image">
                      <img src="./images/Home/section-3/deploy and monitor.png" />
                    </div>
                    <p>Visual deployment and monitoring at pipeline, block and infrastructure components granularity.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="home-section ml-dl" id="cutting-edge-dl">
            <div className="home-section__content width-container" data-parallax-scene="px-ml-dl">
              <div>
                <div className="section__main-title" data-tween-trigger data-visibility="dp">
                  <div data-tween-el>
                    <span className="tw-title-bg"></span>
                    <span className="tw-title-text">CUTTING EDGE</span>
                  </div>
                  <div data-tween-el>
                    <span className="tw-title-bg"></span>
                    <span className="tw-title-text">DL AND AUTO ML</span>
                  </div>
                </div>
                <div className="section__main-title" data-tween-trigger data-visibility="mb">
                  <div data-tween-el>
                    <span className="tw-title-bg"></span>
                    <span className="tw-title-text">CUTTING EDGE</span>
                  </div>
                  <br />
                  <div data-tween-el>
                    <span className="tw-title-bg"></span>
                    <span className="tw-title-text">DL AND</span>
                  </div>
                  <br />
                  <div data-tween-el>
                    <span className="tw-title-bg"></span>
                    <span className="tw-title-text">AUTO ML</span>
                  </div>
                </div>
              </div>
              <div data-tween-trigger>
                <h4 className="section-title line-btm" data-fade-element>Rapidly Create Practical State-of-the-Art Models</h4>
              </div>
              <div className="ai-solutions__card-list" data-tween-trigger>
                <div className="ai-solutions__card" data-stagger-card>
                  <span className="section-card__icon dlmodel"></span>
                  <h4>Latest Deep Learning Algorithms</h4>
                  <p>Razorthink AI Platform provides the latest DL models from research community like CapsNet, Dynamic Co-attention
                    Networks, PoseNet, YOLO, and such to solve your new-gen business problems. </p>
                </div>
                <div className="ai-solutions__card" data-stagger-card>
                  <span className="section-card__icon visual"></span>
                  <h4>Visual Support for Large and Complex Models</h4>
                  <p>Use features such as Groups, Stacks and Model Runners to create and manage large and complex models that are
                    necessary for practical applications.</p>
                </div>
                <div className="ai-solutions__card" data-stagger-card>
                  <span className="section-card__icon automl"></span>
                  <h4>Configurable Auto-ML</h4>
                  <p>Configurable Auto-ML algorithms gets to the right solution by rapidly performing feature engineering, variable
                    selection, model tuning and model selection. </p>
                </div>
              </div>
            </div>
          </section>
          <section className="home-section enterprise" id="architecture">
            <div className="home-section__content width-container" data-parallax-scene="px-enterprise">
              <div data-tween-trigger>
                <div className="section__main-title">
                  <div data-tween-el>
                    <span className="tw-title-bg"></span>
                    <span className="tw-title-text">ENTERPRISE</span>
                  </div>
                  <br />
                  <div data-tween-el>
                    <span className="tw-title-bg"></span>
                    <span className="tw-title-text">ARCHITECTURE</span>
                  </div>
                </div>
                <h4 className="section-title line-btm" data-fade-element>Seamless Integration, Granular Scaling and Control</h4>
              </div>
              <div className="ai-solutions__card-list" data-tween-trigger>
                <div className="ai-solutions__card" data-stagger-card>
                  <span className="section-card__icon collaborate"></span>
                  <h4>Collaborate</h4>
                  <p>Elegant collaborative, governed environment for data scientists, business users, data engineers and IT.</p>
                </div>
                <div className="ai-solutions__card" data-stagger-card>
                  <span className="section-card__icon deploy"></span>
                  <h4>Deploy</h4>
                  <p>Built in build-test-deploy cycles that allow continuous or frequent updates and management of production AI’s.
                    </p>
                </div>
                <div className="ai-solutions__card" data-stagger-card>
                  <span className="section-card__icon monitor"></span>
                  <h4>Monitor</h4>
                  <p>Monitoring and control at granular levels that can plug right into your enterprise monitoring infrastructure.</p>
                </div>
                <div className="ai-solutions__card" data-stagger-card>
                  <span className="section-card__icon scale"></span>
                  <h4>Scale</h4>
                  <p>Granular intelligent scaling both horizontally and vertically, configurable at both engine and pipeline/block
                    levels.</p>
                </div>
              </div>
            </div>
          </section>
          <section className="home-section ai-solutions" id="ai-solutions">
            <div className="home-section__content width-container" data-parallax-scene="px-ai-solutions">
              <div>
                <div className="section__main-title" data-tween-trigger data-visibility="dp">
                  <div data-tween-el>
                    <span className="tw-title-bg"></span>
                    <span className="tw-title-text">BUSINESS READY AI</span>
                  </div>
                  <div data-tween-el>
                    <span className="tw-title-bg"></span>
                    <span className="tw-title-text">SOLUTIONS</span>
                  </div>
                </div>
                <div className="section__main-title" data-tween-trigger data-visibility="mb">
                  <div data-tween-el>
                    <span className="tw-title-bg"></span>
                    <span className="tw-title-text">BUSINESS</span>
                  </div>
                  <br />
                  <div data-tween-el>
                    <span className="tw-title-bg"></span>
                    <span className="tw-title-text">READY AI</span>
                  </div>
                  <br />
                  <div data-tween-el>
                    <span className="tw-title-bg"></span>
                    <span className="tw-title-text">SOLUTIONS</span>
                  </div>
                </div>
              </div>
              <div data-tween-trigger>
                <h4 className="section-title line-btm" data-fade-element>
                  Focus on last mile solutions, not just models
                </h4>
              </div>
              <div className="ai-solutions__card-list" data-tween-trigger>
                <div className="ai-solutions__card" data-stagger-card>
                  <span className="section-card__icon versatile"></span>
                  <h4>Versatile AI Platform</h4>
                  <p>Razorthink AI Platform gives your enterprise the ability to craft end-to-end solutions by modifying existing
                    solutions or crafting entirely new ones.</p>
                </div>
                <div className="ai-solutions__card" data-stagger-card>
                  <span className="section-card__icon evolve"></span>
                  <h4>Evolving Models</h4>
                  <p>Active Learning ensures that AI models evolve with on-going change in underlying data, and business needs.</p>
                </div>
                <div className="ai-solutions__card" data-stagger-card>
                  <span className="section-card__icon loop"></span>
                  <h4>Closed Loop</h4>
                  <p>Closed Loop Architecture that support constant feedback and improvement, accommodating Human Expert Input.</p>
                </div>
                <div className="ai-solutions__card" data-stagger-card>
                  <span className="section-card__icon robust"></span>
                  <h4>Robust APIs</h4>
                  <p>Integrations with existing applications or new solutions through easy to use REST or Async APIs.</p>
                </div>
              </div>
            </div>
          </section>  
          <section className="home-section enterprise-grade">
            <div className="home-section__content width-container" data-parallax-scene="px-ai-solutions">
              <div data-tween-trigger>
                <div className="section__main-title" data-visibility="dp">
                  <div data-tween-el>
                    <span className="tw-title-bg"></span>
                    <span className="tw-title-text">WHAT MAKES A</span>
                  </div>
                  <div data-tween-el>
                    <span className="tw-title-bg"></span>
                    <span className="tw-title-bg-sec"></span>
                    <span className="tw-title-text">
                      <span className="italics">TRUE</span> ENTERPRISE</span>
                  </div>
                  <div data-tween-el>
                    <span className="tw-title-bg"></span>
                    <span className="tw-title-text">GRADE AI/DL</span>
                  </div>
                  <div data-tween-el>
                    <span className="tw-title-bg"></span>
                    <span className="tw-title-text">PLATFORM?</span>
                  </div>
                </div>
                <div className="section__main-title" data-visibility="mb">
                  <div data-tween-el>
                    <span className="tw-title-bg"></span>
                    <span className="tw-title-text">WHAT MAKES</span>
                  </div>
                  <br />
                  <div data-tween-el>
                    <span className="tw-title-bg"></span>
                    <span className="tw-title-bg-sec"></span>
                    <span className="tw-title-text">A
                      <span className="italics">TRUE</span>
                    </span>
                  </div>
                  <br />
                  <div data-tween-el>
                    <span className="tw-title-bg"></span>
                    <span className="tw-title-text">ENTERPRISE</span>
                  </div>
                  <br />
                  <div data-tween-el>
                    <span className="tw-title-bg"></span>
                    <span className="tw-title-text">GRADE AI/DL</span>
                  </div>
                  <br />
                  <div data-tween-el>
                    <span className="tw-title-bg"></span>
                    <span className="tw-title-text">PLATFORM?</span>
                  </div>
                </div>
              </div>
              <div className="section-table-wrapper">
                <div className="section-table" data-tween-trigger>
                  <div className="section-table_row head" data-stagger-card>
                    <div className="section-table_col"></div>
                    <div className="section-table_col">Razorthink AI</div>
                    <div className="section-table_col">Other Platforms</div>
                  </div>
                  <div className="section-table_row" data-stagger-card>
                    <div className="section-table_col">Design complex DL/ML models visually</div>
                    <div className="section-table_col">Complex DL/ML model support with end-to-end capabilities</div>
                    <div className="section-table_col">Point solutions, focus on single model tuning</div>
                  </div>
                  <div className="section-table_row" data-stagger-card>
                    <div className="section-table_col">Deploy, manage and scale with full granular control</div>
                    <div className="section-table_col">Fully dockerized, granular control with immediate recovery of each component</div>
                    <div className="section-table_col">Proprietary architectures either cloud or on-premise</div>
                  </div>
                  <div className="section-table_row" data-stagger-card>
                    <div className="section-table_col">Integrate with existing systems using plug and play architecture</div>
                    <div className="section-table_col">Plug and play auth, data lake, repositories, logging, backup. Connector architecture and REST API’s for any
                      source or target systems</div>
                    <div className="section-table_col">Partial support</div>
                  </div>
                  <div className="section-table_row" data-stagger-card>
                    <div className="section-table_col">Build Hybrid AI’s with DL, ML, Structured and Unstructured data</div>
                    <div className="section-table_col">Pipelines can support Hybrid AI’s in any configuration - Ensembles, collaborative, adversarial</div>
                    <div className="section-table_col">Typically focused on either ML or DL, and use monolithic modeling approaches</div>
                  </div>
                  <div className="section-table_row" data-stagger-card>
                    <div className="section-table_col">Org. structure with flexible model and user governance/collaboration</div>
                    <div className="section-table_col">Full versioning and access control of pipelines, blocks and models, and granular user access</div>
                    <div className="section-table_col">Custom user models, and lack of granular control of assets and functionality</div>
                  </div>
                  <div className="section-table_row" data-stagger-card>
                    <div className="section-table_col">Build evolving, learning systems using built-in closed loop capabilities</div>
                    <div className="section-table_col">Closed loop capabilities supporting ground truth maintenance, experiments and incremental improvement</div>
                    <div className="section-table_col">Generally built as one-shot model building and management</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    
          <section className="home-section testimonials">
            <div className="home-section__content width-container" data-parallax-scene="px-ai-solutions">
              <div data-tween-trigger>
                <div className="section__main-title">
                  <div data-tween-el>
                    <span className="tw-title-bg"></span>
                    <span className="tw-title-text">TESTIMONIALS</span>
                  </div>
                </div>  
              </div>
              <div className="testimonials-content">
                <div data-tween-trigger>
                  <h4 className="section-title line-btm" data-fade-element>
                    Why Razorthink ?
                  </h4>
                  <div className="testimonials__nav-arrows">
                    <span className="testimonials__nav-arrows__left"></span>
                    <span className="testimonials__nav-arrows__right"></span>
                  </div>
                  <div>“We are investing in Deep Learning AI as we believe it's going to take predictive analytics to new heights. Razorthink is one of the very few players who has developed expertise in this area and is helping us to predict customer behavior with superior accuracy.”</div>
                  <div>
                    <ul className="nav-dots">
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                    <div className="testimonials__author">
                      <div className="testimonials__author__name">Balaji Narayanamurthy</div>
                      <div className="testimonials__author__desig">EVP & Head of Business Intelligence Unit, Axis Bank</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="home-section awards">
              <div className="home-section__content width-container">
                <div data-tween-trigger>
                  <div className="section__main-title">
                    <div data-tween-el>
                      <span className="tw-title-bg"></span>
                      <span className="tw-title-text">AWARDS</span>
                    </div>
                  </div>
                </div>
                <div className="awards-content">
                  <a href=""><img src=""/></a>
                  <a href=""><img src=""/></a>
                  <a href=""><img src=""/></a>
                  <a href=""><img src=""/></a>
                  <a href=""><img src=""/></a>
                  <a href=""><img src=""/></a>
                </div>
              </div>
            </section>
        </div>
    </div>
  )
};

export default Home ;