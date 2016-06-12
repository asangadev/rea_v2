import { AppComponent } from './app.component';

describe('AppComponent', function() {

  beforeEach(function() {
    this.app = new AppComponent();
  });

  it('should have loaging the REA app...', function() {
    expect(this.app.rea).toBe('loaging the REA app...');
  });

});
