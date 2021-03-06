import * as tf from '@tensorflow/tfjs-core';

export type ConvParams = {
  filters: tf.Tensor4D
  bias: tf.Tensor1D
}

export type ExtractWeightsFunction = (numWeights: number) => Float32Array