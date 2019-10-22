import React from 'react';
import { Link } from 'react-router-dom';
import StTopbar from 'components/partials/StTopbar';

const StHeader = () => (
  <>
    <header className="st-header">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="l-grid l-grid--space-between l-grid--align-center">
              <div className="l-grid__item">
                <h1 className="st-header__title">DEMO Streaming</h1>
              </div>
              <div className="grid__item">
                <Link className="st-header__login-link" to="/">
                  Log in
                </Link>
                <button className="st-header__trial-btn" aria-label="Start your free trial">
                  Start your free trial
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <StTopbar title="Popular Titles" />
  </>
);

export default StHeader;
