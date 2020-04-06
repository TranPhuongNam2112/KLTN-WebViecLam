package com.nam.jobportal.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.stereotype.Repository;


import com.nam.jobportal.models.Candidate;
import com.nam.jobportal.specification.CandidateSearchQueryCriteriaConsumer;
import com.nam.jobportal.specification.SearchCriteria;

@Repository
public class CandidateDAO implements ICandidateDAO {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public List<Candidate> searchUser(final List<SearchCriteria> params) {
        final CriteriaBuilder builder = entityManager.getCriteriaBuilder();
        final CriteriaQuery<Candidate> query = builder.createQuery(Candidate.class);
        final Root r = query.from(Candidate.class);

        Predicate predicate = builder.conjunction();
        CandidateSearchQueryCriteriaConsumer searchConsumer = new CandidateSearchQueryCriteriaConsumer(predicate, builder, r);
        params.stream().forEach(searchConsumer);
        predicate = searchConsumer.getPredicate();
        query.where(predicate);

        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public void save(final Candidate entity) {
        entityManager.persist(entity);
    }

}
