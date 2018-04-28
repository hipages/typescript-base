import * as must from 'must';
import { suite, test } from 'mocha-typescript';
import { Sample } from '../src/Sample';

@suite
class SampleTest {
  instance: Sample;
  before() {
    this.instance = new Sample();
  }
  @test
  testAdd() {
    this.instance.add(1, 2).must.be.equal(3);
  }
}
