import { AppComponent } from './app.component';

describe('AppComponent', () => {

  beforeEach(function() {
    this.app = new AppComponent();
  });

  it('should have hello property', function() {
    expect(this.app.rea).toBe('loaging the REA app...');
  });

});
