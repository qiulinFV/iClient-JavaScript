﻿import { SuperMap } from '../../SuperMap';

/**
 * Namespace: SuperMap.Lang["zh-CN"]
 * Dictionary for Simplified Chinese.  Keys for entries are used in calls to
 *     <SuperMap.Lang.translate>.  Entry bodies are normal strings or
 *     strings formatted for use with <SuperMap.String.format> calls.
 */
let zh = {
    'title_dataFlowService': '数据流服务',
    'title_distributedAnalysis': '分布式分析',
    'title_clientComputing': '客户端计算',
    
    'text_input_value_inputDataFlowUrl': '请输入数据流服务地址如:ws://{serviceRoot}/{dataFlowName}/dataflow/subscribe',
    'text_displayFeaturesInfo': '显示要素信息',
    'text_subscribe': '订阅',
    'text_cancelSubscribe': '取消订阅',
    
    'text_densityAnalysis': '密度分析',
    'text_CalculateTheValuePerUnitArea': '计算点指定邻域形状内的每单位面积量值',
    'text_option_selectDataset':'请选择数据集',
    'text_label_dataset': '数据集',
    'text_option_simplePointDensityAnalysis': '简单点密度分析',
    'text_option_nuclearDensityAnalysis': '核密度分析',
    'text_label_analyticalMethod': '分析方法',
    'text_option_quadrilateral': '四边形',
    'text_option_hexagon': '六边形',
    'text_label_meshType': '网格面类型',
    'text_option_notSet': '未设置',
    'text_label_weightField': '权重字段',
    'text_label_gridSizeInMeters': '网格大小(单位为：米)',
    'text_label_searchRadius': '搜索半径',
    'text_option_equidistantSegmentation': '等距离分段',
    'text_option_logarithm': '对数',
    'text_option_equalCountingSegment': '等计数分段',
    'text_option_squareRootSegmentation': '平方根分段',
    'text_label_thematicMapSegmentationMode': '专题图分段模式',
    'text_label_thematicMapSegmentationParameters': '专题图分段参数',
    'text_option_greenOrangePurpleGradient': '绿橙紫渐变',
    'text_option_greenOrangeRedGradient': '绿橙红渐变',
    'text_option_rainbowGradient': '彩虹渐变',
    'text_option_spectralGradient': '光谱渐变',
    'text_option_terrainGradient': '地形渐变',
    'text_label_thematicMapColorGradientMode': '专题图颜色渐变模式',
    'text_label_resultLayerName': '结果图层名称',
    'text_chooseFile': '选择文件',
    'text_isoline': '等值线',
    'text_extractDiscreteValue': '提取离散值生成曲线',
    'text_buffer': '缓冲区',
    'text_specifyTheDistance': '指定距离创建周边区域',
    'text_label_analysisLayer': '分析图层',
    'text_label_extractField': '提取字段',
    'text_label_extractedValue': '提取值',
    'text_label_distanceAttenuation': '距离衰减',
    'text_label_gridSize': '栅格大小',
    'text_label_bufferRadius': '缓冲半径',
    'text_label_defaultkilometers': '默认10千米',
    'text_option_kilometer': '千米',
    'text_label_unit': '单位',
    'text_retainOriginal': '保留原对象字段属性',
    'text_mergeBuffer': '合并缓冲区',
    'text_label_color': '颜色',
    'text_label_buffer': '[缓冲区]',
    'text_label_isolines': '[等值线]',


    "btn_analyze": "分析",
    "btn_analyzing": "分析中",
    "btn_emptyTheAnalysisLayer": "清空分析图层",
    "btn_cancelAnalysis": "取消",


    'msg_dataFlowServiceHasBeenSubscribed': '已订阅该数据流服务。',
    'msg_inputDataFlowUrlFirst': '请先输入数据流服务地址。',
    'msg_datasetOrMethodUnsupport': '该数据集不支持本分析类型，请重新选择数据集',
    'msg_selectDataset': '请选择数据集！',
    'msg_setTheWeightField': '请设置权重字段！',
    'msg_theFieldNotSupportAnalysis': '您当前选择的字段不支持分析！',
    'msg_resultIsEmpty': '分析的结果为空！'
    
};
export { zh };
SuperMap.Lang["zh-CN"] = zh;
