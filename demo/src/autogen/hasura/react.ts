import { MutationFunctionOptions } from '@apollo/client'
import { FetchResult } from '@apollo/client'
import { FetchVehicleGraphByIdQuery } from '../';
import { FetchVehicleGraphByIdQueryVariables } from '../';
import { FetchVehicleGraphByIdDocument } from '../';
import { FetchVehicleGraphQuery } from '../';
import { FetchVehicleGraphDocument } from '../';
import { FetchVehicleGraphQueryVariables } from '../';
import { Vehicle_Insert_Input } from '../';
import { Vehicle_On_Conflict } from '../';
import { InsertVehicleGraphMutation } from '../';
import { InsertVehicleGraphMutationVariables } from '../';
import { InsertVehicleGraphWithOnConflictMutationVariables } from '../';
import { InsertVehicleGraphDocument } from '../';
import { InsertVehicleGraphWithOnConflictDocument } from '../';
import { Vehicle_Set_Input } from '../';
import { UpdateVehicleGraphByIdMutation } from '../';
import { UpdateVehicleGraphByIdMutationVariables } from '../';
import { UpdateVehicleGraphByIdDocument } from '../';
import { UpdateVehicleGraphMutation } from '../';
import { UpdateVehicleGraphMutationVariables } from '../';
import { UpdateVehicleGraphDocument } from '../';
import { RemoveVehicleModelMutation } from '../';
import { RemoveVehicleModelMutationVariables } from '../';
import { RemoveVehicleModelDocument } from '../';
import { RemoveVehicleModelByIdMutation } from '../';
import { RemoveVehicleModelByIdMutationVariables } from '../';
import { RemoveVehicleModelByIdDocument } from '../';
import { FetchVehicleGraphLocationOnlyByIdQuery } from '../';
import { FetchVehicleGraphLocationOnlyByIdQueryVariables } from '../';
import { FetchVehicleGraphLocationOnlyByIdDocument } from '../';
import { FetchVehicleGraphLocationOnlyQuery } from '../';
import { FetchVehicleGraphLocationOnlyDocument } from '../';
import { FetchVehicleGraphLocationOnlyQueryVariables } from '../';
import { InsertVehicleGraphLocationOnlyMutation } from '../';
import { InsertVehicleGraphLocationOnlyMutationVariables } from '../';
import { InsertVehicleGraphLocationOnlyWithOnConflictMutationVariables } from '../';
import { InsertVehicleGraphLocationOnlyDocument } from '../';
import { InsertVehicleGraphLocationOnlyWithOnConflictDocument } from '../';
import { UpdateVehicleGraphLocationOnlyByIdMutation } from '../';
import { UpdateVehicleGraphLocationOnlyByIdMutationVariables } from '../';
import { UpdateVehicleGraphLocationOnlyByIdDocument } from '../';
import { UpdateVehicleGraphLocationOnlyMutation } from '../';
import { UpdateVehicleGraphLocationOnlyMutationVariables } from '../';
import { UpdateVehicleGraphLocationOnlyDocument } from '../';
import { FetchDogModelByIdQuery } from '../';
import { FetchDogModelByIdQueryVariables } from '../';
import { FetchDogModelByIdDocument } from '../';
import { FetchDogModelQuery } from '../';
import { FetchDogModelDocument } from '../';
import { FetchDogModelQueryVariables } from '../';
import { Dogs_Insert_Input } from '../';
import { Dogs_On_Conflict } from '../';
import { InsertDogModelMutation } from '../';
import { InsertDogModelMutationVariables } from '../';
import { InsertDogModelWithOnConflictMutationVariables } from '../';
import { InsertDogModelDocument } from '../';
import { InsertDogModelWithOnConflictDocument } from '../';
import { Dogs_Set_Input } from '../';
import { UpdateDogModelByIdMutation } from '../';
import { UpdateDogModelByIdMutationVariables } from '../';
import { UpdateDogModelByIdDocument } from '../';
import { UpdateDogModelMutation } from '../';
import { UpdateDogModelMutationVariables } from '../';
import { UpdateDogModelDocument } from '../';
import { RemoveDogsModelMutation } from '../';
import { RemoveDogsModelMutationVariables } from '../';
import { RemoveDogsModelDocument } from '../';
import { RemoveDogsModelByIdMutation } from '../';
import { RemoveDogsModelByIdMutationVariables } from '../';
import { RemoveDogsModelByIdDocument } from '../';
  import { QueryHookOptions, useQuery, LazyQueryHookOptions, useLazyQuery, MutationHookOptions, useMutation, QueryLazyOptions } from '@apollo/client'

    // UTILITY METHODS
    //------------------------------------------------
  

    
    // Optimistic response generation utility method
    //
    function generateOptimisticResponseForMutationById<T>(operationType: "update", entityName: string, entityId: any, setObject: object) {
      return ({
        __typename: "mutation_root",
        [`${operationType}_${entityName}`]: {
          affected_rows: 1,
          returning: [
            {
              id: entityId,
              __typename: entityName,
              ...setObject
            }
          ],
          __typename: `${entityName}_mutation_response`
        }
      } as unknown) as T;
    }
  

    // vehicle React
    //------------------------------------------------
  

      // Fetch Hooks
      //
  
      /**
       * __useFetchVehicleGraphByIdQuery__
       *
       * To run a query within a React component, call `useVehicleGraphByIdQuery`
       * When your component renders, `useVehicleGraphByIdQuery` returns an object from Apollo Client that contains loading, error, data properties, and a shortcut result property 
       *
       * @param options options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
       *
       * @example
       * const { loading, error, vehicleGraph } = useFetchVehicleGraphByIdQuery({ vehicleId:<value> });
       * 
       * The majority of the options and the specifics of their behavior are derived from apollographql. See https://www.apollographql.com/docs/react/api/react-hooks/#usequery for details
       * 
       */

        // Fetch Hook
        //
        export function useFetchVehicleGraphByIdQuery({ 
          vehicleId, 
          options, 
        }: {
          vehicleId:string,
          options?: Omit<QueryHookOptions<FetchVehicleGraphByIdQuery, FetchVehicleGraphByIdQueryVariables>, 'query' | 'variables'>
        }) {
            const query = useQuery<FetchVehicleGraphByIdQuery, FetchVehicleGraphByIdQueryVariables>(FetchVehicleGraphByIdDocument, { variables: { vehicleId }, ...options });
            return { ...query, vehicleGraph: query && query.data && query.data.vehicle_by_pk } 
        }
    

      /**
       * __useFetchVehicleGraphByIdLazyQuery__
       * 
       * @example
       * const [fetchVehicleGraphById, { called, loading, error, vehicleGraph }] = useFetchVehicleGraphById();
       * fetchVehicleGraphById({ vehicleId:<value> });
       * 
       * The majority of the options and the specifics of their behavior are derived from apollographql. See https://www.apollographql.com/docs/react/api/react-hooks/#uselazyquery for details
       * 
       */

      // Lazy Fetch Hook
      //
      export function useFetchVehicleGraphByIdLazyQuery(options?: Omit<LazyQueryHookOptions<FetchVehicleGraphByIdQuery, FetchVehicleGraphByIdQueryVariables>, 'query' | 'variables'>) {
        const lazyQuery = useLazyQuery<FetchVehicleGraphByIdQuery, FetchVehicleGraphByIdQueryVariables>(FetchVehicleGraphByIdDocument, options );
        
        const pickVehicleGraph = (query: FetchVehicleGraphByIdQuery | null | undefined) => { return ( query && query.vehicle_by_pk ); };
        
        const wrappedLazyQuery = ({ vehicleId, options }: { vehicleId:string, options?: Omit<QueryLazyOptions<FetchVehicleGraphByIdQueryVariables>, 'variables'> }) => {
          return lazyQuery[0]({ variables: { vehicleId }, ...options });
        };   

        return [wrappedLazyQuery, { ...lazyQuery[1], vehicleGraph: pickVehicleGraph(lazyQuery[1].data) }] as [typeof wrappedLazyQuery, typeof lazyQuery[1] & { vehicleGraph: ReturnType<typeof pickVehicleGraph> }];
      }
    

      // Fetch Collection Hook
      //
      export function useFetchVehicleGraphObjectsQuery( options: Omit<QueryHookOptions<FetchVehicleGraphQuery, FetchVehicleGraphQueryVariables>, 'query'> ) {
          const query = useQuery<FetchVehicleGraphQuery, FetchVehicleGraphQueryVariables>(FetchVehicleGraphDocument, options );
          return { ...query, objects: query && query.data && query.data.vehicle }
      }
  
      // Lazy Fetch Collection Hook
      //
      export function useFetchVehicleGraphObjectsLazyQuery( options?: Omit<LazyQueryHookOptions<FetchVehicleGraphQuery, FetchVehicleGraphQueryVariables>, 'query'> ) {
        const lazyQuery = useLazyQuery<FetchVehicleGraphQuery, FetchVehicleGraphQueryVariables>(FetchVehicleGraphDocument, options );
      
        const pickObjects = (query: FetchVehicleGraphQuery | null | undefined) => { return ( query && query.vehicle ); };
        
        const wrappedLazyQuery = ( options?: QueryLazyOptions<FetchVehicleGraphQueryVariables> ) => {
          return lazyQuery[0]();
        };
    
        return [wrappedLazyQuery, { ...lazyQuery[1], objects: pickObjects(lazyQuery[1].data) }] as [typeof wrappedLazyQuery, typeof lazyQuery[1] & { objects: ReturnType<typeof pickObjects> }];
      }
    

  // Insert Hooks
  //
  export function useInsertVehicleGraph( options?: Omit<MutationHookOptions<InsertVehicleGraphMutation, InsertVehicleGraphMutationVariables>, 'mutation' | 'variables'> ) {
    const lazyMutation = useMutation<InsertVehicleGraphMutation, InsertVehicleGraphMutationVariables>( InsertVehicleGraphDocument, options );
                                
    const pickVehicleGraph = (mutation:InsertVehicleGraphMutation | null | undefined) => { return ( mutation && mutation.insert_vehicle && mutation.insert_vehicle!.returning && mutation.insert_vehicle!.returning[0] ); };
    
    const wrappedLazyMutation = async ({ vehicle, options } :{ vehicle: Vehicle_Insert_Input, options?: Omit<MutationFunctionOptions<InsertVehicleGraphMutation, InsertVehicleGraphMutationVariables>, 'variables'> }) => {
      const fetchResult = await lazyMutation[0]({ variables: { objects: [vehicle] }, ...options });
      return { ...fetchResult, vehicleGraph: pickVehicleGraph(fetchResult.data) };
    };

    return [ wrappedLazyMutation, { ...lazyMutation[1], vehicleGraph: pickVehicleGraph(lazyMutation[1].data) } ] as [typeof wrappedLazyMutation, typeof lazyMutation[1] & { vehicleGraph: ReturnType<typeof pickVehicleGraph> }];
  }
  

  //
  export function useInsertVehicleGraphWithOnConflict( options?: Omit<MutationHookOptions<InsertVehicleGraphMutation, InsertVehicleGraphMutationVariables>, 'mutation' | 'variables'> ) {
    const lazyMutation = useMutation<InsertVehicleGraphMutation, InsertVehicleGraphWithOnConflictMutationVariables>( InsertVehicleGraphWithOnConflictDocument, options );
                                
    const wrappedLazyMutation = async ({ vehicle, onConflict, options } :{ vehicle: Vehicle_Insert_Input, onConflict?: Vehicle_On_Conflict, options?: Omit<MutationFunctionOptions<InsertVehicleGraphMutation, InsertVehicleGraphMutationVariables>, 'variables'> }) => {
      const fetchResult = await lazyMutation[0]({ variables: { objects: [vehicle], onConflict }, ...options });
      return { ...fetchResult, vehicleGraph: pickVehicleGraph(fetchResult.data) };
    };

    const pickVehicleGraph = (mutation:InsertVehicleGraphMutation | null | undefined) => { return ( mutation && mutation.insert_vehicle && mutation.insert_vehicle!.returning && mutation.insert_vehicle!.returning[0] ); };

    return [ wrappedLazyMutation, { ...lazyMutation[1], vehicleGraph: pickVehicleGraph(lazyMutation[1].data) } ] as [typeof wrappedLazyMutation, typeof lazyMutation[1] & { vehicleGraph: ReturnType<typeof pickVehicleGraph> }];
  }
  

  //
  export function useInsertVehicleGraphObjects( options?: Omit<MutationHookOptions<InsertVehicleGraphMutation, InsertVehicleGraphMutationVariables>, 'mutation'> ) {
    const lazyMutation = useMutation<InsertVehicleGraphMutation, InsertVehicleGraphMutationVariables>( InsertVehicleGraphDocument, options );
                                
    const pickObjects = (mutation:InsertVehicleGraphMutation | null | undefined) => { return ( mutation && mutation.insert_vehicle && mutation.insert_vehicle!.returning ); };
    
    const wrappedLazyMutation = async ( options?: MutationFunctionOptions<InsertVehicleGraphMutation, InsertVehicleGraphMutationVariables> ) => {
      const fetchResult = await lazyMutation[0]( options );
      return { ...fetchResult, objects: pickObjects(fetchResult.data) }
    };

    return [ wrappedLazyMutation, { ...lazyMutation[1], objects: pickObjects(lazyMutation[1].data) } ] as [typeof wrappedLazyMutation, typeof lazyMutation[1] & { objects: ReturnType<typeof pickObjects> }];
  }
  

    // Update Hooks
    //
    export function useUpdateVehicleGraphById( options?: Omit<MutationHookOptions<UpdateVehicleGraphByIdMutation, UpdateVehicleGraphByIdMutationVariables>, 'mutation' | 'variables'> ) {
      const lazyMutation = useMutation<UpdateVehicleGraphByIdMutation, UpdateVehicleGraphByIdMutationVariables>(UpdateVehicleGraphByIdDocument, options );
      
      const pickVehicleGraph = (mutation:UpdateVehicleGraphMutation | null | undefined) => { return ( mutation && mutation.update_vehicle && mutation.update_vehicle!.returning && mutation.update_vehicle!.returning[0] ); };
      
      const wrappedLazyMutation = async ({ vehicleId, set, autoOptimisticResponse, options }: { vehicleId: string; set: Vehicle_Set_Input; autoOptimisticResponse?:boolean; options?: Omit<MutationFunctionOptions<UpdateVehicleGraphByIdMutation, UpdateVehicleGraphByIdMutationVariables>, 'variables'>; }) => {
        const mutationOptions:MutationFunctionOptions<UpdateVehicleGraphByIdMutation, UpdateVehicleGraphByIdMutationVariables> = { variables: { id:vehicleId, set }, ...options };
        if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ mutationOptions.optimisticResponse = generateOptimisticResponseForMutationById<UpdateVehicleGraphByIdMutation>('update', 'vehicle', vehicleId, set); }

        const fetchResult = await lazyMutation[0]({ variables: { id: vehicleId, set }, ...mutationOptions });
        return { ...fetchResult, vehicleGraph: pickVehicleGraph(fetchResult.data) };
      };

      return [ wrappedLazyMutation, { ...lazyMutation[1], vehicleGraph: pickVehicleGraph(lazyMutation[1].data) } ] as [typeof wrappedLazyMutation, typeof lazyMutation[1] & { vehicleGraph: ReturnType<typeof pickVehicleGraph> }];
    }
  

    //
    export function useUpdateVehicleGraph( options?: Omit<MutationHookOptions<UpdateVehicleGraphMutation, UpdateVehicleGraphMutationVariables>, 'mutation'> ) {
      const lazyMutation = useMutation<UpdateVehicleGraphMutation, UpdateVehicleGraphMutationVariables>(UpdateVehicleGraphDocument, options );
      
      const pickObjects = (mutation:UpdateVehicleGraphMutation | null | undefined) => { return ( mutation && mutation.update_vehicle && mutation.update_vehicle!.returning ); };
      
      const wrappedLazyMutation = async ( options: MutationFunctionOptions<UpdateVehicleGraphMutation, UpdateVehicleGraphMutationVariables> ) => {
        const fetchResult = await lazyMutation[0]( options );
        return { ...fetchResult, objects: pickObjects(fetchResult.data) }
      };

      return [ wrappedLazyMutation, { ...lazyMutation[1], objects: pickObjects(lazyMutation[1].data) } ] as [typeof wrappedLazyMutation, typeof lazyMutation[1] & { objects: ReturnType<typeof pickObjects> }];
    }
  

    // Delete Hooks
    //

    export function useRemoveVehicleModelById( options?: Omit<MutationHookOptions<RemoveVehicleModelByIdMutation, RemoveVehicleModelByIdMutationVariables>, 'mutation' | 'variables'> ) {
      const lazyMutation = useMutation<RemoveVehicleModelByIdMutation, RemoveVehicleModelByIdMutationVariables>(RemoveVehicleModelByIdDocument, options );
      
      const pickAffectedRows = (mutation:RemoveVehicleModelByIdMutation | null | undefined) => { return ( mutation && mutation.delete_vehicle && mutation.delete_vehicle!.affected_rows ); };
      
      const wrappedLazyMutation = async ({ vehicleId, options }:{ vehicleId: string, options?: Omit<MutationFunctionOptions<RemoveVehicleModelByIdMutation, RemoveVehicleModelByIdMutationVariables>, 'variables'> }) => {
        const fetchResult = await lazyMutation[0]({ variables: { id:vehicleId }, ...options });
        return { ...fetchResult, affected_rows: pickAffectedRows(fetchResult.data) }
      }; 
      
      return [wrappedLazyMutation, { ...lazyMutation[1], affected_rows: pickAffectedRows(lazyMutation[1].data) }] as [typeof wrappedLazyMutation, typeof lazyMutation[1] & { affected_rows: ReturnType<typeof pickAffectedRows> }];
    }
  

    //
    export function useRemoveVehicleModelObjects( options?: Omit<MutationHookOptions<RemoveVehicleModelMutation, RemoveVehicleModelMutationVariables>, 'mutation'> ) {
      const lazyMutation = useMutation<RemoveVehicleModelMutation, RemoveVehicleModelMutationVariables>(RemoveVehicleModelDocument, options );
      
      const pickAffectedRows = (mutation: RemoveVehicleModelMutation | null | undefined) => { return ( mutation && mutation.delete_vehicle && mutation.delete_vehicle!.affected_rows ); };
      
      const wrappedLazyMutation = async ( options: MutationFunctionOptions<RemoveVehicleModelMutation, RemoveVehicleModelMutationVariables> ) => {
        const fetchResult = await lazyMutation[0]( options );
        return { ...fetchResult, affected_rows: pickAffectedRows(fetchResult.data) }
      };

      return [wrappedLazyMutation, { ...lazyMutation[1], affected_rows: pickAffectedRows(lazyMutation[1].data) }] as [typeof wrappedLazyMutation, typeof lazyMutation[1] & { affected_rows: ReturnType<typeof pickAffectedRows> }];
    }
  

      // Fetch Hooks
      //
  
      /**
       * __useFetchVehicleGraphLocationOnlyByIdQuery__
       *
       * To run a query within a React component, call `useVehicleGraphLocationOnlyByIdQuery`
       * When your component renders, `useVehicleGraphLocationOnlyByIdQuery` returns an object from Apollo Client that contains loading, error, data properties, and a shortcut result property 
       *
       * @param options options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
       *
       * @example
       * const { loading, error, vehicleGraphLocationOnly } = useFetchVehicleGraphLocationOnlyByIdQuery({ vehicleId:<value> });
       * 
       * The majority of the options and the specifics of their behavior are derived from apollographql. See https://www.apollographql.com/docs/react/api/react-hooks/#usequery for details
       * 
       */

        // Fetch Hook
        //
        export function useFetchVehicleGraphLocationOnlyByIdQuery({ 
          vehicleId, 
          options, 
        }: {
          vehicleId:string,
          options?: Omit<QueryHookOptions<FetchVehicleGraphLocationOnlyByIdQuery, FetchVehicleGraphLocationOnlyByIdQueryVariables>, 'query' | 'variables'>
        }) {
            const query = useQuery<FetchVehicleGraphLocationOnlyByIdQuery, FetchVehicleGraphLocationOnlyByIdQueryVariables>(FetchVehicleGraphLocationOnlyByIdDocument, { variables: { vehicleId }, ...options });
            return { ...query, vehicleGraphLocationOnly: query && query.data && query.data.vehicle_by_pk } 
        }
    

      /**
       * __useFetchVehicleGraphLocationOnlyByIdLazyQuery__
       * 
       * @example
       * const [fetchVehicleGraphLocationOnlyById, { called, loading, error, vehicleGraphLocationOnly }] = useFetchVehicleGraphLocationOnlyById();
       * fetchVehicleGraphLocationOnlyById({ vehicleId:<value> });
       * 
       * The majority of the options and the specifics of their behavior are derived from apollographql. See https://www.apollographql.com/docs/react/api/react-hooks/#uselazyquery for details
       * 
       */

      // Lazy Fetch Hook
      //
      export function useFetchVehicleGraphLocationOnlyByIdLazyQuery(options?: Omit<LazyQueryHookOptions<FetchVehicleGraphLocationOnlyByIdQuery, FetchVehicleGraphLocationOnlyByIdQueryVariables>, 'query' | 'variables'>) {
        const lazyQuery = useLazyQuery<FetchVehicleGraphLocationOnlyByIdQuery, FetchVehicleGraphLocationOnlyByIdQueryVariables>(FetchVehicleGraphLocationOnlyByIdDocument, options );
        
        const pickVehicleGraphLocationOnly = (query: FetchVehicleGraphLocationOnlyByIdQuery | null | undefined) => { return ( query && query.vehicle_by_pk ); };
        
        const wrappedLazyQuery = ({ vehicleId, options }: { vehicleId:string, options?: Omit<QueryLazyOptions<FetchVehicleGraphLocationOnlyByIdQueryVariables>, 'variables'> }) => {
          return lazyQuery[0]({ variables: { vehicleId }, ...options });
        };   

        return [wrappedLazyQuery, { ...lazyQuery[1], vehicleGraphLocationOnly: pickVehicleGraphLocationOnly(lazyQuery[1].data) }] as [typeof wrappedLazyQuery, typeof lazyQuery[1] & { vehicleGraphLocationOnly: ReturnType<typeof pickVehicleGraphLocationOnly> }];
      }
    

      // Fetch Collection Hook
      //
      export function useFetchVehicleGraphLocationOnlyObjectsQuery( options: Omit<QueryHookOptions<FetchVehicleGraphLocationOnlyQuery, FetchVehicleGraphLocationOnlyQueryVariables>, 'query'> ) {
          const query = useQuery<FetchVehicleGraphLocationOnlyQuery, FetchVehicleGraphLocationOnlyQueryVariables>(FetchVehicleGraphLocationOnlyDocument, options );
          return { ...query, objects: query && query.data && query.data.vehicle }
      }
  
      // Lazy Fetch Collection Hook
      //
      export function useFetchVehicleGraphLocationOnlyObjectsLazyQuery( options?: Omit<LazyQueryHookOptions<FetchVehicleGraphLocationOnlyQuery, FetchVehicleGraphLocationOnlyQueryVariables>, 'query'> ) {
        const lazyQuery = useLazyQuery<FetchVehicleGraphLocationOnlyQuery, FetchVehicleGraphLocationOnlyQueryVariables>(FetchVehicleGraphLocationOnlyDocument, options );
      
        const pickObjects = (query: FetchVehicleGraphLocationOnlyQuery | null | undefined) => { return ( query && query.vehicle ); };
        
        const wrappedLazyQuery = ( options?: QueryLazyOptions<FetchVehicleGraphLocationOnlyQueryVariables> ) => {
          return lazyQuery[0]();
        };
    
        return [wrappedLazyQuery, { ...lazyQuery[1], objects: pickObjects(lazyQuery[1].data) }] as [typeof wrappedLazyQuery, typeof lazyQuery[1] & { objects: ReturnType<typeof pickObjects> }];
      }
    

  // Insert Hooks
  //
  export function useInsertVehicleGraphLocationOnly( options?: Omit<MutationHookOptions<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyMutationVariables>, 'mutation' | 'variables'> ) {
    const lazyMutation = useMutation<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyMutationVariables>( InsertVehicleGraphLocationOnlyDocument, options );
                                
    const pickVehicleGraphLocationOnly = (mutation:InsertVehicleGraphLocationOnlyMutation | null | undefined) => { return ( mutation && mutation.insert_vehicle && mutation.insert_vehicle!.returning && mutation.insert_vehicle!.returning[0] ); };
    
    const wrappedLazyMutation = async ({ vehicle, options } :{ vehicle: Vehicle_Insert_Input, options?: Omit<MutationFunctionOptions<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyMutationVariables>, 'variables'> }) => {
      const fetchResult = await lazyMutation[0]({ variables: { objects: [vehicle] }, ...options });
      return { ...fetchResult, vehicleGraphLocationOnly: pickVehicleGraphLocationOnly(fetchResult.data) };
    };

    return [ wrappedLazyMutation, { ...lazyMutation[1], vehicleGraphLocationOnly: pickVehicleGraphLocationOnly(lazyMutation[1].data) } ] as [typeof wrappedLazyMutation, typeof lazyMutation[1] & { vehicleGraphLocationOnly: ReturnType<typeof pickVehicleGraphLocationOnly> }];
  }
  

  //
  export function useInsertVehicleGraphLocationOnlyWithOnConflict( options?: Omit<MutationHookOptions<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyMutationVariables>, 'mutation' | 'variables'> ) {
    const lazyMutation = useMutation<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyWithOnConflictMutationVariables>( InsertVehicleGraphLocationOnlyWithOnConflictDocument, options );
                                
    const wrappedLazyMutation = async ({ vehicle, onConflict, options } :{ vehicle: Vehicle_Insert_Input, onConflict?: Vehicle_On_Conflict, options?: Omit<MutationFunctionOptions<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyMutationVariables>, 'variables'> }) => {
      const fetchResult = await lazyMutation[0]({ variables: { objects: [vehicle], onConflict }, ...options });
      return { ...fetchResult, vehicleGraphLocationOnly: pickVehicleGraphLocationOnly(fetchResult.data) };
    };

    const pickVehicleGraphLocationOnly = (mutation:InsertVehicleGraphLocationOnlyMutation | null | undefined) => { return ( mutation && mutation.insert_vehicle && mutation.insert_vehicle!.returning && mutation.insert_vehicle!.returning[0] ); };

    return [ wrappedLazyMutation, { ...lazyMutation[1], vehicleGraphLocationOnly: pickVehicleGraphLocationOnly(lazyMutation[1].data) } ] as [typeof wrappedLazyMutation, typeof lazyMutation[1] & { vehicleGraphLocationOnly: ReturnType<typeof pickVehicleGraphLocationOnly> }];
  }
  

  //
  export function useInsertVehicleGraphLocationOnlyObjects( options?: Omit<MutationHookOptions<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyMutationVariables>, 'mutation'> ) {
    const lazyMutation = useMutation<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyMutationVariables>( InsertVehicleGraphLocationOnlyDocument, options );
                                
    const pickObjects = (mutation:InsertVehicleGraphLocationOnlyMutation | null | undefined) => { return ( mutation && mutation.insert_vehicle && mutation.insert_vehicle!.returning ); };
    
    const wrappedLazyMutation = async ( options?: MutationFunctionOptions<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyMutationVariables> ) => {
      const fetchResult = await lazyMutation[0]( options );
      return { ...fetchResult, objects: pickObjects(fetchResult.data) }
    };

    return [ wrappedLazyMutation, { ...lazyMutation[1], objects: pickObjects(lazyMutation[1].data) } ] as [typeof wrappedLazyMutation, typeof lazyMutation[1] & { objects: ReturnType<typeof pickObjects> }];
  }
  

    // Update Hooks
    //
    export function useUpdateVehicleGraphLocationOnlyById( options?: Omit<MutationHookOptions<UpdateVehicleGraphLocationOnlyByIdMutation, UpdateVehicleGraphLocationOnlyByIdMutationVariables>, 'mutation' | 'variables'> ) {
      const lazyMutation = useMutation<UpdateVehicleGraphLocationOnlyByIdMutation, UpdateVehicleGraphLocationOnlyByIdMutationVariables>(UpdateVehicleGraphLocationOnlyByIdDocument, options );
      
      const pickVehicleGraphLocationOnly = (mutation:UpdateVehicleGraphLocationOnlyMutation | null | undefined) => { return ( mutation && mutation.update_vehicle && mutation.update_vehicle!.returning && mutation.update_vehicle!.returning[0] ); };
      
      const wrappedLazyMutation = async ({ vehicleId, set, autoOptimisticResponse, options }: { vehicleId: string; set: Vehicle_Set_Input; autoOptimisticResponse?:boolean; options?: Omit<MutationFunctionOptions<UpdateVehicleGraphLocationOnlyByIdMutation, UpdateVehicleGraphLocationOnlyByIdMutationVariables>, 'variables'>; }) => {
        const mutationOptions:MutationFunctionOptions<UpdateVehicleGraphLocationOnlyByIdMutation, UpdateVehicleGraphLocationOnlyByIdMutationVariables> = { variables: { id:vehicleId, set }, ...options };
        if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ mutationOptions.optimisticResponse = generateOptimisticResponseForMutationById<UpdateVehicleGraphLocationOnlyByIdMutation>('update', 'vehicle', vehicleId, set); }

        const fetchResult = await lazyMutation[0]({ variables: { id: vehicleId, set }, ...mutationOptions });
        return { ...fetchResult, vehicleGraphLocationOnly: pickVehicleGraphLocationOnly(fetchResult.data) };
      };

      return [ wrappedLazyMutation, { ...lazyMutation[1], vehicleGraphLocationOnly: pickVehicleGraphLocationOnly(lazyMutation[1].data) } ] as [typeof wrappedLazyMutation, typeof lazyMutation[1] & { vehicleGraphLocationOnly: ReturnType<typeof pickVehicleGraphLocationOnly> }];
    }
  

    //
    export function useUpdateVehicleGraphLocationOnly( options?: Omit<MutationHookOptions<UpdateVehicleGraphLocationOnlyMutation, UpdateVehicleGraphLocationOnlyMutationVariables>, 'mutation'> ) {
      const lazyMutation = useMutation<UpdateVehicleGraphLocationOnlyMutation, UpdateVehicleGraphLocationOnlyMutationVariables>(UpdateVehicleGraphLocationOnlyDocument, options );
      
      const pickObjects = (mutation:UpdateVehicleGraphLocationOnlyMutation | null | undefined) => { return ( mutation && mutation.update_vehicle && mutation.update_vehicle!.returning ); };
      
      const wrappedLazyMutation = async ( options: MutationFunctionOptions<UpdateVehicleGraphLocationOnlyMutation, UpdateVehicleGraphLocationOnlyMutationVariables> ) => {
        const fetchResult = await lazyMutation[0]( options );
        return { ...fetchResult, objects: pickObjects(fetchResult.data) }
      };

      return [ wrappedLazyMutation, { ...lazyMutation[1], objects: pickObjects(lazyMutation[1].data) } ] as [typeof wrappedLazyMutation, typeof lazyMutation[1] & { objects: ReturnType<typeof pickObjects> }];
    }
  

    // dogs React
    //------------------------------------------------
  

      // Fetch Hooks
      //
  
      /**
       * __useFetchDogModelByIdQuery__
       *
       * To run a query within a React component, call `useDogModelByIdQuery`
       * When your component renders, `useDogModelByIdQuery` returns an object from Apollo Client that contains loading, error, data properties, and a shortcut result property 
       *
       * @param options options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
       *
       * @example
       * const { loading, error, dogModel } = useFetchDogModelByIdQuery({ dogsId:<value> });
       * 
       * The majority of the options and the specifics of their behavior are derived from apollographql. See https://www.apollographql.com/docs/react/api/react-hooks/#usequery for details
       * 
       */

        // Fetch Hook
        //
        export function useFetchDogModelByIdQuery({ 
          dogsId, 
          options, 
        }: {
          dogsId:string,
          options?: Omit<QueryHookOptions<FetchDogModelByIdQuery, FetchDogModelByIdQueryVariables>, 'query' | 'variables'>
        }) {
            const query = useQuery<FetchDogModelByIdQuery, FetchDogModelByIdQueryVariables>(FetchDogModelByIdDocument, { variables: { dogsId }, ...options });
            return { ...query, dogModel: query && query.data && query.data.dogs_by_pk } 
        }
    

      /**
       * __useFetchDogModelByIdLazyQuery__
       * 
       * @example
       * const [fetchDogModelById, { called, loading, error, dogModel }] = useFetchDogModelById();
       * fetchDogModelById({ dogsId:<value> });
       * 
       * The majority of the options and the specifics of their behavior are derived from apollographql. See https://www.apollographql.com/docs/react/api/react-hooks/#uselazyquery for details
       * 
       */

      // Lazy Fetch Hook
      //
      export function useFetchDogModelByIdLazyQuery(options?: Omit<LazyQueryHookOptions<FetchDogModelByIdQuery, FetchDogModelByIdQueryVariables>, 'query' | 'variables'>) {
        const lazyQuery = useLazyQuery<FetchDogModelByIdQuery, FetchDogModelByIdQueryVariables>(FetchDogModelByIdDocument, options );
        
        const pickDogModel = (query: FetchDogModelByIdQuery | null | undefined) => { return ( query && query.dogs_by_pk ); };
        
        const wrappedLazyQuery = ({ dogsId, options }: { dogsId:string, options?: Omit<QueryLazyOptions<FetchDogModelByIdQueryVariables>, 'variables'> }) => {
          return lazyQuery[0]({ variables: { dogsId }, ...options });
        };   

        return [wrappedLazyQuery, { ...lazyQuery[1], dogModel: pickDogModel(lazyQuery[1].data) }] as [typeof wrappedLazyQuery, typeof lazyQuery[1] & { dogModel: ReturnType<typeof pickDogModel> }];
      }
    

      // Fetch Collection Hook
      //
      export function useFetchDogModelObjectsQuery( options: Omit<QueryHookOptions<FetchDogModelQuery, FetchDogModelQueryVariables>, 'query'> ) {
          const query = useQuery<FetchDogModelQuery, FetchDogModelQueryVariables>(FetchDogModelDocument, options );
          return { ...query, objects: query && query.data && query.data.dogs }
      }
  
      // Lazy Fetch Collection Hook
      //
      export function useFetchDogModelObjectsLazyQuery( options?: Omit<LazyQueryHookOptions<FetchDogModelQuery, FetchDogModelQueryVariables>, 'query'> ) {
        const lazyQuery = useLazyQuery<FetchDogModelQuery, FetchDogModelQueryVariables>(FetchDogModelDocument, options );
      
        const pickObjects = (query: FetchDogModelQuery | null | undefined) => { return ( query && query.dogs ); };
        
        const wrappedLazyQuery = ( options?: QueryLazyOptions<FetchDogModelQueryVariables> ) => {
          return lazyQuery[0]();
        };
    
        return [wrappedLazyQuery, { ...lazyQuery[1], objects: pickObjects(lazyQuery[1].data) }] as [typeof wrappedLazyQuery, typeof lazyQuery[1] & { objects: ReturnType<typeof pickObjects> }];
      }
    

  // Insert Hooks
  //
  export function useInsertDogModel( options?: Omit<MutationHookOptions<InsertDogModelMutation, InsertDogModelMutationVariables>, 'mutation' | 'variables'> ) {
    const lazyMutation = useMutation<InsertDogModelMutation, InsertDogModelMutationVariables>( InsertDogModelDocument, options );
                                
    const pickDogModel = (mutation:InsertDogModelMutation | null | undefined) => { return ( mutation && mutation.insert_dogs && mutation.insert_dogs!.returning && mutation.insert_dogs!.returning[0] ); };
    
    const wrappedLazyMutation = async ({ dogs, options } :{ dogs: Dogs_Insert_Input, options?: Omit<MutationFunctionOptions<InsertDogModelMutation, InsertDogModelMutationVariables>, 'variables'> }) => {
      const fetchResult = await lazyMutation[0]({ variables: { objects: [dogs] }, ...options });
      return { ...fetchResult, dogModel: pickDogModel(fetchResult.data) };
    };

    return [ wrappedLazyMutation, { ...lazyMutation[1], dogModel: pickDogModel(lazyMutation[1].data) } ] as [typeof wrappedLazyMutation, typeof lazyMutation[1] & { dogModel: ReturnType<typeof pickDogModel> }];
  }
  

  //
  export function useInsertDogModelWithOnConflict( options?: Omit<MutationHookOptions<InsertDogModelMutation, InsertDogModelMutationVariables>, 'mutation' | 'variables'> ) {
    const lazyMutation = useMutation<InsertDogModelMutation, InsertDogModelWithOnConflictMutationVariables>( InsertDogModelWithOnConflictDocument, options );
                                
    const wrappedLazyMutation = async ({ dogs, onConflict, options } :{ dogs: Dogs_Insert_Input, onConflict?: Dogs_On_Conflict, options?: Omit<MutationFunctionOptions<InsertDogModelMutation, InsertDogModelMutationVariables>, 'variables'> }) => {
      const fetchResult = await lazyMutation[0]({ variables: { objects: [dogs], onConflict }, ...options });
      return { ...fetchResult, dogModel: pickDogModel(fetchResult.data) };
    };

    const pickDogModel = (mutation:InsertDogModelMutation | null | undefined) => { return ( mutation && mutation.insert_dogs && mutation.insert_dogs!.returning && mutation.insert_dogs!.returning[0] ); };

    return [ wrappedLazyMutation, { ...lazyMutation[1], dogModel: pickDogModel(lazyMutation[1].data) } ] as [typeof wrappedLazyMutation, typeof lazyMutation[1] & { dogModel: ReturnType<typeof pickDogModel> }];
  }
  

  //
  export function useInsertDogModelObjects( options?: Omit<MutationHookOptions<InsertDogModelMutation, InsertDogModelMutationVariables>, 'mutation'> ) {
    const lazyMutation = useMutation<InsertDogModelMutation, InsertDogModelMutationVariables>( InsertDogModelDocument, options );
                                
    const pickObjects = (mutation:InsertDogModelMutation | null | undefined) => { return ( mutation && mutation.insert_dogs && mutation.insert_dogs!.returning ); };
    
    const wrappedLazyMutation = async ( options?: MutationFunctionOptions<InsertDogModelMutation, InsertDogModelMutationVariables> ) => {
      const fetchResult = await lazyMutation[0]( options );
      return { ...fetchResult, objects: pickObjects(fetchResult.data) }
    };

    return [ wrappedLazyMutation, { ...lazyMutation[1], objects: pickObjects(lazyMutation[1].data) } ] as [typeof wrappedLazyMutation, typeof lazyMutation[1] & { objects: ReturnType<typeof pickObjects> }];
  }
  

    // Update Hooks
    //
    export function useUpdateDogModelById( options?: Omit<MutationHookOptions<UpdateDogModelByIdMutation, UpdateDogModelByIdMutationVariables>, 'mutation' | 'variables'> ) {
      const lazyMutation = useMutation<UpdateDogModelByIdMutation, UpdateDogModelByIdMutationVariables>(UpdateDogModelByIdDocument, options );
      
      const pickDogModel = (mutation:UpdateDogModelMutation | null | undefined) => { return ( mutation && mutation.update_dogs && mutation.update_dogs!.returning && mutation.update_dogs!.returning[0] ); };
      
      const wrappedLazyMutation = async ({ dogsId, set, autoOptimisticResponse, options }: { dogsId: string; set: Dogs_Set_Input; autoOptimisticResponse?:boolean; options?: Omit<MutationFunctionOptions<UpdateDogModelByIdMutation, UpdateDogModelByIdMutationVariables>, 'variables'>; }) => {
        const mutationOptions:MutationFunctionOptions<UpdateDogModelByIdMutation, UpdateDogModelByIdMutationVariables> = { variables: { id:dogsId, set }, ...options };
        if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ mutationOptions.optimisticResponse = generateOptimisticResponseForMutationById<UpdateDogModelByIdMutation>('update', 'dogs', dogsId, set); }

        const fetchResult = await lazyMutation[0]({ variables: { id: dogsId, set }, ...mutationOptions });
        return { ...fetchResult, dogModel: pickDogModel(fetchResult.data) };
      };

      return [ wrappedLazyMutation, { ...lazyMutation[1], dogModel: pickDogModel(lazyMutation[1].data) } ] as [typeof wrappedLazyMutation, typeof lazyMutation[1] & { dogModel: ReturnType<typeof pickDogModel> }];
    }
  

    //
    export function useUpdateDogModel( options?: Omit<MutationHookOptions<UpdateDogModelMutation, UpdateDogModelMutationVariables>, 'mutation'> ) {
      const lazyMutation = useMutation<UpdateDogModelMutation, UpdateDogModelMutationVariables>(UpdateDogModelDocument, options );
      
      const pickObjects = (mutation:UpdateDogModelMutation | null | undefined) => { return ( mutation && mutation.update_dogs && mutation.update_dogs!.returning ); };
      
      const wrappedLazyMutation = async ( options: MutationFunctionOptions<UpdateDogModelMutation, UpdateDogModelMutationVariables> ) => {
        const fetchResult = await lazyMutation[0]( options );
        return { ...fetchResult, objects: pickObjects(fetchResult.data) }
      };

      return [ wrappedLazyMutation, { ...lazyMutation[1], objects: pickObjects(lazyMutation[1].data) } ] as [typeof wrappedLazyMutation, typeof lazyMutation[1] & { objects: ReturnType<typeof pickObjects> }];
    }
  

    // Delete Hooks
    //

    export function useRemoveDogsModelById( options?: Omit<MutationHookOptions<RemoveDogsModelByIdMutation, RemoveDogsModelByIdMutationVariables>, 'mutation' | 'variables'> ) {
      const lazyMutation = useMutation<RemoveDogsModelByIdMutation, RemoveDogsModelByIdMutationVariables>(RemoveDogsModelByIdDocument, options );
      
      const pickAffectedRows = (mutation:RemoveDogsModelByIdMutation | null | undefined) => { return ( mutation && mutation.delete_dogs && mutation.delete_dogs!.affected_rows ); };
      
      const wrappedLazyMutation = async ({ dogsId, options }:{ dogsId: string, options?: Omit<MutationFunctionOptions<RemoveDogsModelByIdMutation, RemoveDogsModelByIdMutationVariables>, 'variables'> }) => {
        const fetchResult = await lazyMutation[0]({ variables: { id:dogsId }, ...options });
        return { ...fetchResult, affected_rows: pickAffectedRows(fetchResult.data) }
      }; 
      
      return [wrappedLazyMutation, { ...lazyMutation[1], affected_rows: pickAffectedRows(lazyMutation[1].data) }] as [typeof wrappedLazyMutation, typeof lazyMutation[1] & { affected_rows: ReturnType<typeof pickAffectedRows> }];
    }
  

    //
    export function useRemoveDogsModelObjects( options?: Omit<MutationHookOptions<RemoveDogsModelMutation, RemoveDogsModelMutationVariables>, 'mutation'> ) {
      const lazyMutation = useMutation<RemoveDogsModelMutation, RemoveDogsModelMutationVariables>(RemoveDogsModelDocument, options );
      
      const pickAffectedRows = (mutation: RemoveDogsModelMutation | null | undefined) => { return ( mutation && mutation.delete_dogs && mutation.delete_dogs!.affected_rows ); };
      
      const wrappedLazyMutation = async ( options: MutationFunctionOptions<RemoveDogsModelMutation, RemoveDogsModelMutationVariables> ) => {
        const fetchResult = await lazyMutation[0]( options );
        return { ...fetchResult, affected_rows: pickAffectedRows(fetchResult.data) }
      };

      return [wrappedLazyMutation, { ...lazyMutation[1], affected_rows: pickAffectedRows(lazyMutation[1].data) }] as [typeof wrappedLazyMutation, typeof lazyMutation[1] & { affected_rows: ReturnType<typeof pickAffectedRows> }];
    }
  