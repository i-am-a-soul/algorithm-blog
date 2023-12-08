import { getPrimaryAlgorithmSidebar } from './01.primary-algorithm/articles.js';
import { getPrimaryDataStructureSidebar } from './02.primary-data-structure/articles.js';
import { getSearchSidebar } from './03.search/articles.js';
import { getMathematicsSidebar } from './04.mathematics/articles.js';
import { getAdvancedDataStructureSidebar } from './05.advanced-data-structure/articles.js';
import { getDynamicProgrammingSidebar } from './06.dynamic-programming/articles.js';
import { getGraphTheorySidebar } from './07.graph-theory/articles.js';
import { getStringSidebar } from './08.string/articles.js';
import { getTricksSidebar } from './09.tricks/articles.js';

export const getSolutionSidebar = () => [{
  text: '基本算法',
  children: [
    '',
    ...getPrimaryAlgorithmSidebar(),
  ],
}, {
  text: '初级数据结构',
  children: [
    ...getPrimaryDataStructureSidebar(),
  ],
}, {
  text: '搜索',
  children: [
    ...getSearchSidebar(),
  ],
}, {
  text: '数学',
  children: [
    ...getMathematicsSidebar(),
  ],
}, {
  text: '高级数据结构',
  children: [
    ...getAdvancedDataStructureSidebar(),
  ],
}, {
  text: '动态规划',
  children: [
    ...getDynamicProgrammingSidebar(),
  ],
}, {
  text: '图论',
  children: [
    ...getGraphTheorySidebar(),
  ],
}, {
  text: '字符串',
  children: [
    ...getStringSidebar(),
  ],
}, {
  text: '综合技巧与实践',
  children: [
    ...getTricksSidebar(),
  ],
}];
