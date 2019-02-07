if (typeof registerLayout !== 'undefined') {
  class Random {
    // currently: all children are blockified
    *intrinsicSizes() {}
    *layout(children, edges, constraintSpace, styles) {
      const childFragments = []
      console.log(constraintSpace);
      for(const child of children) {
        const childFragment = yield child.layoutNextFragment();
        console.log(childFragment);
        childFragment.inlineOffset = Math.random() * constraintSpace.fixedInlineSize;
        childFragment.blockOffset = Math.random() * constraintSpace.fixedBlockSize;
        childFragments.push(childFragment);
      }
      return {
        childFragments
      }
    }
  }
  registerLayout('random', Random)
}